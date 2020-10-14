import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_customer} from './queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col, Tabs, Tab} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CustomerTab from './Tabs/CustomerTab'
import RentalsTab from './Tabs/RentalsTab'
import BookingsTab from './Tabs/BookingsTab'

class View extends React.Component {
  constructor (props) {
    super(props)
    const { customerId } = this.props.router.query
    this.state={
      customerId: customerId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/customer/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le client a bien été supprimé.', 'success')
    this.props.history.push("/customers/");
  }
  header(){
    const { customerId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Client #"+customerId}</h3>

                <div className="card-tools">
                    <Link href={"/customers/edit?customerId="+customerId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    const {customerId} = this.state
    return (
      <AdminLayout>
        <Page title="Clients " fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_customer} variables={{customerId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div> Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.customer)
                  return " customer not found"
                return (
                  <Tabs   defaultActiveKey="customer" id="uncontrolled-tab-example" style={{backgroundColor:'#f4f6f9',margin:'3px',paddingBottom:'2px'}}>
                    <Tab eventKey="customer" title="Client" >
                       <CustomerTab customer={data.customer} />
                    </Tab>
                    <Tab eventKey="rentals" title="Locations">
                       <RentalsTab rentals={data.customer.rentals} />
                    </Tab>
                    <Tab eventKey="bookings" title="Réservations">
                      <BookingsTab bookings={data.customer.bookings} />
                    </Tab>
                    <Tab eventKey="bills" title="Factures">
                      <CustomerTab customer={data.customer} />
                    </Tab>
                  </Tabs>
                )
              }}
              </Query>
          </Card>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(View))
