import React from 'react'
import { delete_brand} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'


class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { brandId } = this.props.router.query
    this.state={
      brandId: brandId,
      brand:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Marques",path:"/brands/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La marque a bien été supprimée.', 'success')
    this.props.history.push("/brands/");
  }
  render() {
    let {brandId} = this.props
    return (
      <Mutation mutation={delete_brand} variables={{id:brandId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteBrand.statut_code==1){
                      this.props.flashMessages.set('La marque a bien été supprimée.', 'success')
                      Router.push("/brands/list");
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
