import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import { withRouter } from 'next/router'
import Link from 'next/link'
import RentalDeleteButton from '../../rental/DeleteButton'
class CarInsurancesTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {car_insurances, carId} = this.props
    if (!car_insurances)
      return <p><center>Aucune assurance attachée au véhicule.</center></p>
    return (

    console.log(carId+"A"),
      <Row className="col-sm-12">
        <Link href={"/car_insurances/add?carId="+carId} >
          <a style={{margin:3}}
          className="btn btn-info btn-sm" >
            <i className="fa fa-plus"></i> Nouvelle assurance
          </a>
        </Link>
      <Table striped bordered hover size="sm">
       <thead>
         <tr>
           <th>#ID</th>
           <th>Date de début</th>
           <th>Date de fin</th>
           <th>Société d'assurance</th>
           <th>Document</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         {
           car_insurances.map((car_insurance, index)=>{
             return (
               <tr key={car_insurance.id}>
                  <td>{car_insurance.id}</td>
                  <td>{moment(car_insurance.date_begin).format("DD/MM/YYYY")}</td>
                  <td>{moment(car_insurance.date_end).format("DD/MM/YYYY")} </td>
                  <td>{car_insurance.insurance && car_insurance.insurance.name}</td>
                  <td>
                    { car_insurance.scanned_car_insurance_url && <a target="_blank" href={car_insurance.scanned_car_insurance_url} > Télécharger </a>}
                    { !car_insurance.scanned_car_insurance_url && "--"}
                  </td>
                 <td>
                   <Link href={"/car_insurances/view?car_insuranceId="+car_insurance.id} >
                     <a style={{margin:3}}
                     className="btn btn-info btn-sm" >
                     <i className="fa fa-eye"></i>
                     </a>
                   </Link>
                   <Link href={"/car_insurances/edit?car_insuranceId="+car_insurance.id} >
                     <a  style={{margin:3}}
                     className="btn btn-success btn-sm" >
                     <i className="fa fa-pen-alt"></i>
                     </a>
                   </Link>
                   <RentalDeleteButton car_insuranceId={car_insurance.id} />
                 </td>
               </tr>
             )
           })
         }
       </tbody>
     </Table>
      </Row>
    )
  }
}

export default withRouter(CarInsurancesTab)
