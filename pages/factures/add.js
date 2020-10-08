import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_user} from './queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import OrderForm from './OrderForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      order:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Users",path:"/factures/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La facture a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle facture "}</h3>

                <div className="card-tools">
                    <Link href={"/factures/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {order} = this.state
    return (
      <AdminLayout>
        <Page title="Nouvelle facture" fariane={this.fariane}>
            <Mutation mutation={create_user} variables={{data:this.state.order}} >
              {postMutation =>
                 <OrderForm
                    user={order}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('La facture a bien été crée.', 'success')
                            Router.push("/orders/view?userId="+result.data.createUser.id);
                          })
                        }}
                        onChange={(order)=>this.setState({order:order})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
