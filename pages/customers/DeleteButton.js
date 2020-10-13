import React from 'react'
import { delete_customer } from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { customerId } = this.props.router.query
    this.state={
      customerId: customerId,
      customer:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/customers/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le client a bien été supprimée.', 'success')
    this.props.history.push("/customers/");
  }
  render() {
    let {customerId} = this.props
    return (
      <Mutation mutation={delete_customer} variables={{id:customerId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                alert("hello")
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteCustomer.statut_code==1){
                      alert('Le client a bien été supprimé.', 'success')
                      Router.push("/customers/list");
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

export default withData(withRouter(DeleteButton))
