import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_booking} from './queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BookingForm from './BookingForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Réservations",path:"/bookings/list"}]  
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La réservation a bien été supprimée.', 'success')
    this.props.history.push("/bookings/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle réservation "}</h3>

                <div className="card-tools">
                    <Link href={"/bookings/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {booking} = this.state
    return (
      <AdminLayout>
        <Page title="Réservation" fariane={this.fariane}>
            <Mutation mutation={create_booking} variables={{data:this.state.booking}} >
              {postMutation =>
                 <BookingForm
                  booking={booking}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('La réservation a bien été crée.', 'success')
                            Router.push("/bookings/view?bookingId="+result.data.createBooking.id);
                          })
                        }}
                        onChange={(booking)=>this.setState({booking:booking})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
