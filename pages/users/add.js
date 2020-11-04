import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_user} from '../../components/user/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import UserForm from '../../components/user/UserForm'
import { withFlashMessages } from 'next-flash-messages'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      user:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Users",path:"/users/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouveau utilisateur "}</h3>

                <div className="card-tools">
                    <Link href={"/users/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouveau
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {user} = this.state
    return (
      <AdminLayout>
        <Page title="Utilisateurs" fariane={this.fariane}>
            <Mutation mutation={create_user} variables={{data:this.state.user}} >
              {postMutation =>
                 <UserForm
                    user={user}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            this.props.flashMessages.set('L\'utilisateur a bien été crée.', 'success')
                            Router.push("/users/view?userId="+result.data.createUser.id);
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

export default withFlashMessages(withData(withRouter(Add)))
