import React from 'react'
import { delete_insurance } from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { insuranceId } = this.props.router.query
    this.state={
      insuranceId: insuranceId,
      insurance:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/insurances/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le client a bien été supprimée.', 'success')
    this.props.history.push("/insurances/");
  }
  render() {
    let {insuranceId} = this.props
    return (
      <Mutation mutation={delete_insurance} variables={{id:insuranceId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                alert("hello")
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteInsurance.statut_code==1){
                      alert('L\'assurance a bien été supprimé.', 'success')
                      Router.push("/insurances/list");
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
