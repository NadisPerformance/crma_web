import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_bookings} from '../../components/booking/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import BookingDeleteButton from '../../components/booking/DeleteButton'
import moment from 'moment'
import Pagination from '../../components/Pagination'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Réservations",path:"/booking/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.booking)
    return (<React.Fragment>
             <h3 className="card-title">Locations</h3>
              <div className="card-tools">
                    <Link href="/bookings/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle location
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    const {
      limit, page
    } = this.state
    return (
      <AdminLayout>
        <Page title="Réservations" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_bookings} variables={{limit:limit,page:page}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                return (
                  <React.Fragment>
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Date de début</th>
                          <th>Date de fin</th>
                          <th>Client</th>
                          <th>Véhicule</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.bookings.edges.map((edge, index)=>{
                            let booking = edge.node
                            return (
                              <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{moment(booking.date_begin).format("DD/MM/YYYY")}</td>
                                <td>{moment(booking.date_end).format("DD/MM/YYYY")} </td>
                                <td> {booking.customer.gender} {booking.customer.lastname} {booking.customer.firstname}</td>
                                <td>{booking.car.plate_number}</td>
                                <td>
                                  <Link href={"/bookings/view?bookingId="+booking.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/bookings/edit?bookingId="+booking.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <BookingDeleteButton bookingId={booking.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                    currentPage={data.bookings.pageInfo.currentPage}
                    count={data.bookings.pageInfo.count}
                    perPage={this.state.limit}
                    onChange={(page)=>this.setState({page:page})}
                    />
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

export default withData(List, true)
