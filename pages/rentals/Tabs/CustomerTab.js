import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
 
import { withRouter } from 'next/router'
class Add extends React.Component {
  constructor (props) {
    super(props)   
  }
  render() {   
    let {customer} = this.props
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody> 
                        <tr>
                            <th style={{width:"50%"}} >Nom complet:</th>
                            <td>{customer.gender} {customer.lastname} {customer.firstname}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >CNI:</th>
                            <td>{customer.cni}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Téléphone:</th>
                            <td>{customer.phone}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >E-mail:</th>
                            <td>{customer.email}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Adresse:</th>
                            <td>{customer.address}<br/> {customer.city}</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row> 
    )
  }
}

export default withRouter(Add)