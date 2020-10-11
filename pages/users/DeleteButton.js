import React from 'react'
import { delete_user} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { userId } = this.props.router.query
    this.state={
      userId: userId,
      user:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Users",path:"/users/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  render() {
    let {userId} = this.props
    return (
      <Mutation mutation={delete_user} variables={{id:userId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                alert("hello")
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteUser.statut_code==1){
                      alert('L\'utilisateur a bien été supprimé.', 'success')
                      Router.push("/users/list");
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
