import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import {api_url} from '../../../lib/config'
import { withRouter } from 'next/router'
class RentalTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {rental} = this.props
    if(!rental)
     return null
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th style={{width:"50%"}} >Date de début:</th>
                            <td>{moment(rental.date_begin).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Date de fin:</th>
                            <td>{moment(rental.date_end).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Contrat de location préremplie:</th>
                            <td><a target="_blank" href={api_url+"contracts/download?rentalId="+rental.id} > Télécharger </a></td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Contrat de location scannée:</th>
                            <td>{ rental.scanned_contract_url &&
                                <a href={rental.scanned_contract_url} > Télécharger </a> }
                                { !rental.scanned_contract_url &&
                                    "--" }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    )
  }
}

export default withRouter(RentalTab)
