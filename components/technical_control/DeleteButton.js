import React from 'react'
import { delete_technical_control } from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { technical_controlId } = this.props.router.query
    this.state={
      technical_controlId: technical_controlId,
      technical_control:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Contrôle technique",path:"/technical_controls/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le contrôle technique a bien été supprimée.', 'success')
    this.props.history.push("/technical_controls/");
  }
  render() {
    let {technical_controlId} = this.props
    return (
      <Mutation mutation={delete_technical_control} variables={{id:technical_controlId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                alert("hello")
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteTechnicalControl.statut_code==1){
                      alert('Le contrôle technique a bien été supprimé.', 'success')
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
