import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'

import { withRouter } from 'next/router'
class CustomerTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {customer} = this.props
    if (!customer)
      return null
    return (
      <Row className="col-sm-12">
          <Col className="col-sm-6 table-responsive">
              <table className="table">
                  <tbody>
                  <tr>
                    <th style={{width:"50%"}}>Type du client:</th>
                    <td>{customer.type==0 ? "Particulier": "Société"}</td>
                  </tr>
                   { customer.type == 1 &&
                    <tr>
                      <th style={{width:"50%"}}>Nom de la société:</th>
                      <td>{customer.company_name}</td>
                    </tr>
                  }
                  <tr>
                    <th style={{width:"50%"}}>Civilité:</th>
                    <td>{customer.gender}</td>
                  </tr>
                    <tr>
                      <th style={{width:"50%"}}>Nom:</th>
                      <td>{customer.lastname}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Prénom:</th>
                      <td>{customer.firstname}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Date de naissance:</th>
                      <td>{customer.birthday}</td>
                    </tr>

                    <tr>
                      <th style={{width:"50%"}}>CNI:</th>
                      <td>{customer.cni}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Permis de conduite:</th>
                      <td>{customer.driver_license}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Ville:</th>
                      <td>{customer.city}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Adresse:</th>
                      <td>{customer.address}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>E-mail:</th>
                      <td>{customer.email}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Téléphone:</th>
                      <td>{customer.phone}</td>
                    </tr>


                  </tbody>
              </table>
          </Col>
          <Col className="col-sm-6 table-responsive">
              <table className="table">
                 <tbody>
                    <tr>
                      <th style={{width:"50%"}}>Date de création:</th>
                      <td>{ new Date(customer.createdAt).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th style={{width:"50%"}}>Dernière modification:</th>
                      <td>{ new Date(customer.updatedAt).toLocaleString()}</td>
                    </tr>
                  </tbody>
              </table>
          </Col>
      </Row>
    )
  }
}

export default withRouter(CustomerTab)
