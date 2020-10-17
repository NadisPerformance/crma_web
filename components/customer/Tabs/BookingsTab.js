import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import { withRouter } from 'next/router'
import Link from 'next/link'
import bookingDeleteButton from '../../booking/DeleteButton'
class BookingsTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {bookings} = this.props
    if (!bookings)
      return <p><center>Aucune réservation effectuée par le client.</center></p>
    return (
      <Row className="col-sm-12">
      { bookings.length>0 &&
      <Table striped bordered hover size="sm">
       <thead>
         <tr>
           <th>#ID</th>
           <th>Date de début</th>
           <th>Date de fin</th>
           <th>Véhicule</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         {
           bookings.map((booking, index)=>{
             return (
               <tr key={booking.id}>
                 <td>{booking.id}</td>
                 <td>{moment(booking.date_begin).format("DD/MM/YYYY")}</td>
                 <td>{moment(booking.date_end).format("DD/MM/YYYY")} </td>
                 <td>{booking.car && booking.car.plate_number}</td>
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
                   <bookingDeleteButton bookingId={booking.id} />
                 </td>
               </tr>
             )
           })
         }
       </tbody>
     </Table>
      }
      {bookings.length==0 && <p style={{margin:'5px'}}>Aucune réservation effectuée par le client.</p>}
      </Row>
    )
  }
}

export default withRouter(BookingsTab)
