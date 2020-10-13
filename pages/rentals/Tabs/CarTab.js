import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
 
import { withRouter } from 'next/router'
class Add extends React.Component {
  constructor (props) {
    super(props)   
  }
  render() {   
    let {car} = this.props
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody> 
                        <tr>
                            <th style={{width:"50%"}} >Immatriculation:</th>
                            <td>{car.plate_number}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >La marque:</th>
                            <td>{car.brand.name}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Modéle:</th>
                            <td>{car.model} {car.model_date}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Catégorie:</th>
                            <td>{car.category.title}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Prix de location:</th>
                            <td>{car.price} DHs</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Couleur:</th>
                            <td>{car.color.name}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Numéro de chassis:</th>
                            <td>{car.chassis_number}</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row> 
    )
  }
}

export default withRouter(Add)