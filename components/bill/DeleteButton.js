import React from 'react'
import { delete_bill} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { billId } = this.props.router.query
    this.state={
      billId: billId,
      bill:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Factures",path:"/bills/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La facture a bien été supprimée.', 'success')
    this.props.history.push("/bills/list");
  }
  render() {
    let {billId} = this.props
    return (
      <Mutation mutation={delete_bill} variables={{id:billId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deletebill.statut_code==1){
                      this.props.flashMessages.set('La facture a bien été supprimée.', 'success')
                      Router.push("/bills/list");
                  }
                })
              }}
                  className="btn btn-danger btn-sm" >
                  <i className="fa fa-trash" style={{color:'white'}}></i>
             </a>
          }
      </Mutation>

    )
  }
}

export default withFlashMessages(withData(withRouter(DeleteButton)))
