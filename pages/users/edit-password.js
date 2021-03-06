import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_user_password_to_update, update_user_password} from '../../components/user/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import UserPasswordForm from '../../components/user/UserPasswordForm'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { userId } = this.props.router.query
    this.state={
      userId: userId,
      user:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Utilisateurs",path:"/users/list"},{title:"Utilisateur #"+userId,path:"/users/view?userId="+userId},{title:"Modifier mot de passe",path:"/users/edit?userId="+userId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  header(){
    const { userId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Utilisateur #"+userId}</h3>

                <div className="card-tools">
                    <Link href={"/users/edit/"+userId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {userId, user} = this.state
    if(user)
      delete user.id
    return (
      <AdminLayout>
        <Page title="Utilisateurs" fariane={this.fariane}>
            <Query query={get_user_password_to_update} variables={{userId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.user)
                  return "User not found"
                if(this.state.user == null){
                    delete data.user.__typename
                    user = this.state.user = data.user
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_user_password} variables={{id:userId,data:this.state.user}} >
                      {postMutation =>
                      <UserPasswordForm
                        user={user}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            this.props.flashMessages.set('Mot de passe a bien été modifié.', 'success')
                            Router.push("/users/view?userId="+result.data.updateUserPassword.id);
                          })
                        }}
                        onChange={(user)=>this.setState({user:user})}
                         />
                      }
                    </Mutation>
                )
              }}
              </Query>
        </Page>
      </AdminLayout>
    )
  }
}

export default withFlashMessages(withData(withRouter(Edit)))
