import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'

import { withRouter } from 'next/router'
class CarTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {car} = this.props
    if (!car)
      return null
    return (
      <Row className="col-sm-12">
          <Col className="col-sm-6 table-responsive">
              <table className="table">
                  <tbody>
                    <tr>
                      <td colspan="2">
                      <center>
                      {car.picture &&
                        <img src={car.picture_url} height="150px" />
                      }
                      </center>
                      </td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Marque:</th>
                      <td>{car.brand && car.brand.name}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}} >Modèle:</th>
                      <td>{car.model}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Date du modèle:</th>
                      <td>{car.model_date}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Immatriculation:</th>
                      <td>{car.plate_number}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Numéro de chassis:</th>
                      <td>{car.chassis_number}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}} >Catégorie:</th>
                      <td>{car.category && car.category.title}</td>
                    </tr>

                  </tbody>
              </table>
          </Col>
          <Col className="col-sm-6 table-responsive">
              <table className="table">
                 <tbody>
                 <tr>
                   <th style={{width:"50%"}}>Prix de location:</th>
                   <td>{car.price} Dhs</td>
                 </tr>
                 <tr>
                   <th style={{width:"50%"}}>Couleur:</th>
                   <td>{car.color && car.color.name}</td>
                 </tr>
                 <tr>
                   <th style={{width:"50%"}}>Statut:</th>
                   <td>{car.status && car.status.title}</td>
                 </tr>
                    <tr>
                      <th style={{width:"50%"}}>Date de création:</th>
                      <td>{ new Date(car.createdAt).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Dernière modification:</th>
                      <td>{ new Date(car.updatedAt).toLocaleString()}</td>
                    </tr>
                  </tbody>
              </table>
          </Col>
      </Row>
    )
  }
}

export default withRouter(CarTab)
