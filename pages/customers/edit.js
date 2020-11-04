import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_customer_to_update, update_customer} from '../../components/customer/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CustomerForm from '../../components/customer/CustomerForm'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { customerId } = this.props.router.query
    this.state={
      customerId: customerId,
      customer:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/customers/list"},{title:"Client #"+customerId,path:"/customers/view?customerId="+customerId},{title:"Modifier client",path:"/customers/edit?customerId="+customerId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le Client a bien été supprimée.', 'success')
    this.props.history.push("/customers/");
  }
  header(){
    const { customerId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Client #"+customerId}</h3>

                <div className="card-tools">
                    <Link href={"/customers/edit/"+customerId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {customerId, customer} = this.state
    if(customer)
      delete customer.id
    return (
      <AdminLayout>
        <Page title="Clients" fariane={this.fariane}>
            <Query query={get_customer_to_update} variables={{customerId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.customer)
                  return "Customer not found"
                if(this.state.customer == null){
                    delete data.customer.__typename
                    customer = this.state.customer = data.customer
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_customer} variables={{id:customerId,data:this.state.customer}} >
                      {postMutation =>
                      <CustomerForm
                        customer={customer}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            this.props.flashMessages.set('Le client a bien été modifié.', 'success')
                            Router.push("/customers/view?customerId="+result.data.updateCustomer.id);
                          })
                        }}
                        onChange={(customer)=>this.setState({customer:customer})}
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
