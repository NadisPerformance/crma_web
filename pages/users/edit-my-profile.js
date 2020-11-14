import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_me_to_update, update_my_profile} from '../../components/user/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import ProfileForm from '../../components/user/ProfileForm'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class EditMyProfile extends React.Component {
  constructor (props) {
    super(props) 
    this.state={
      user:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Mon profil",path:"/users/my-profile"},{title:"Modifier",path:"/users/edit-my-profile"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Modifier mon profil"}</h3>

                <div className="card-tools">
                    <Link href={"/users/edit-my-profile"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier mon profil
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    return (
      <AdminLayout>
        <Page title="Mon profil" fariane={this.fariane}>
            <Query query={get_me_to_update}  _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)

                if(!data.me)
                  return "User not found"
                var user
                if(this.state.me == null){
                    delete data.me.__typename
                    user=this.state.user = data.me
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_my_profile} variables={{data:this.state.user}} >
                      {postMutation =>
                      <ProfileForm
                        user={user}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            this.props.flashMessages.set('Votre profil a bien été modifié.', 'success')
                            Router.push("/users/my-profile");
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

export default withFlashMessages(withData(withRouter(EditMyProfile)))
