import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {update_my_password} from '../../components/user/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import UserPasswordForm from '../../components/user/UserPasswordForm'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class EditMyPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      user:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Mon profil",path:"/users/my-profile"},{title:"Modifier mon mot de passe",path:"/users/edit-my-password"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  render() {
    return (
      <AdminLayout>
        <Page title="Modifier mon mot de passe" fariane={this.fariane}>
          <Mutation mutation={update_my_password} variables={{data:this.state.user}} >
                      {postMutation =>
                      <UserPasswordForm
                        user={null}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            this.props.flashMessages.set('Mot de passe a bien été modifié.', 'success')
                            Router.push("/users/my-profile");
                          })
                        }}
                        onChange={(user)=>this.setState({user:user})}
                         />
                      }
            </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withFlashMessages(withData(withRouter(EditMyPassword)))
