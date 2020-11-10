import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import {api_url} from '../../../lib/config'
import { withRouter } from 'next/router'
class BillTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {bill} = this.props
    if(!bill)
     return null
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th style={{width:"50%"}} >Numéro de facture:</th>
                            <td>{bill.bill_number}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Date de facture:</th>
                            <td>{moment(bill.bill_date).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Facture de location:</th>
                            <td><a target="_blank" href="#" > Télécharger </a></td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Contrat de location scannée:</th>
                            <td>{ bill.scanned_contract_url &&
                                <a  target="_blank" href={bill.scanned_contract_url} > Télécharger </a> }
                                { !bill.scanned_contract_url &&
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

export default withRouter(BillTab)
