import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import { withRouter } from 'next/router'
import Link from 'next/link'
import RentalDeleteButton from '../../rentals/DeleteButton'
class RentalsTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {rentals} = this.props
    if (!rentals)
      return <p><center>Aucune location effectuée par le client.</center></p>
    return (
      <Row className="col-sm-12">
      { rentals.length > 0 &&
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
           rentals.map((rental, index)=>{
             return (
               <tr key={rental.id}>
                 <td>{rental.id}</td>
                 <td>{moment(rental.date_begin).format("DD/MM/YYYY")}</td>
                 <td>{moment(rental.date_end).format("DD/MM/YYYY")} </td>
                 <td>{rental.car && rental.car.plate_number}</td>
                 <td>
                   <Link href={"/rentals/view?rentalId="+rental.id} >
                     <a style={{margin:3}}
                     className="btn btn-info btn-sm" >
                     <i className="fa fa-eye"></i>
                     </a>
                   </Link>
                   <Link href={"/rentals/edit?rentalId="+rental.id} >
                     <a  style={{margin:3}}
                     className="btn btn-success btn-sm" >
                     <i className="fa fa-pen-alt"></i>
                     </a>
                   </Link>
                   <RentalDeleteButton rentalId={rental.id} />
                 </td>
               </tr>
             )
           })
         }
       </tbody>
     </Table>
     }
     {rentals.length==0 && <p style={{margin:'5px'}}>Aucune location effectuée par le client.</p>}

      </Row>
    )
  }
}

export default withRouter(RentalsTab)
