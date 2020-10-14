import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_booking} from './queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BookingTab from './Tabs/BookingTab'
import CustomerTab from './Tabs/CustomerTab'
import CarTab from './Tabs/CarTab'


class View extends React.Component {
  constructor (props) {
    super(props)
    const { bookingId } = this.props.router.query
    this.state={
      bookingId: bookingId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Réservations",path:"/booking/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    this.props.history.push("/bookings/");
  }
  header(){
    const { bookingId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Réservation #"+bookingId}</h3>

                <div className="card-tools">
                    <Link href={"/bookings/edit?bookingId="+bookingId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    const {bookingId} = this.state
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_booking} variables={{bookingId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.booking)
                  return "Booking not found"
                return (
                  <React.Fragment>
                  <br/>
                  <Tabs variant="pills"  defaultActiveKey="booking" id="uncontrolled-tab-example" style={{backgroundColor:'#f4f6f9',marginLeft:'3px',paddingBottom:'2px'}}>
                    <Tab eventKey="booking" title="Location" >
                       <BookingTab booking={data.booking} />
                    </Tab>
                    <Tab eventKey="customer" title="Client">
                      <CustomerTab customer={data.booking.customer} />
                    </Tab>

                    <Tab eventKey="car" title="Véhicule" >
                      <CarTab car={data.booking.car} />
                    </Tab>
                  </Tabs>
                  </React.Fragment>
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
