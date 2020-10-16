import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_booking, update_booking} from './queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BookingForm from './BookingForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { bookingId } = this.props.router.query
    this.state={
      bookingId: bookingId,
      booking:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Réservations",path:"/bookings/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La réservation a bien été supprimée.', 'success')
    this.props.history.push("/bookings/");
  }
  header(){
    const { bookingId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Réservation #"+bookingId}</h3>

                <div className="card-tools">
                    <Link href={"/bookings/edit/"+bookingId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {bookingId, booking} = this.state
    if(booking)
      delete booking.id
    return (
      <AdminLayout>
        <Page title="Utilisateurs" fariane={this.fariane}>
            <Query query={get_booking} variables={{bookingId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.booking)
                  return "Booking not found"
                if(this.state.booking == null){
                    delete data.booking.__typename
                    booking = this.state.booking = data.booking
                }
                booking.customerId = this.state.booking.customerId * 1
                booking.carId = this.state.booking.carId * 1
                booking.second_driverId = this.state.booking.second_driverId *  1
                delete booking.customer
                delete booking.car
                //console.log(user)
                return (
                    <Mutation mutation={update_booking} variables={{id:bookingId,data:booking}} >
                      {postMutation =>
                      <BookingForm
                      booking={booking}
                          onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(user)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              //console.log(result)
                              alert('La location a bien été modifié.', 'success')
                              Router.push("/bookings/view?bookingId="+result.data.updateBooking.id);
                            })
                          }
                        }
                        onChange={(booking)=>this.setState({booking:booking})}
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

export default withData(withRouter(Edit))
