import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_customer} from '../../components/customer/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CustomerForm from '../../components/customer/CustomerForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      customer:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/customers/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le client a bien été supprimée.', 'success')
    this.props.history.push("/customers/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouveau client "}</h3>

                <div className="card-tools">
                    <Link href={"/customers/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Nouveau
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {customer} = this.state
    return (
      <AdminLayout>
        <Page title="Clients" fariane={this.fariane}>
            <Mutation mutation={create_customer} variables={{data:this.state.customer}} >
              {postMutation =>
                 <CustomerForm
                 customer={customer}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('Le client a bien été crée.', 'success')
                            Router.push("/customers/view?customerId="+result.data.createCustomer.id);
                          })
                        }}
                        onChange={(customer)=>this.setState({customer:customer})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
