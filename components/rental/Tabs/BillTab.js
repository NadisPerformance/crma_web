import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import Link from 'next/link'

import { withRouter } from 'next/router'
class BillTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {bill} = this.props
    if (!bill)
      return null
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th style={{width:"50%"}} >Facture:</th>
                            <td>{bill.id}
                            <Link href={"/bills/view?billId="+bill.id} >
                              <a style={{margin:3}}
                              className="btn btn-info btn-sm" >
                               Afficher
                              </a>
                            </Link>
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Total HT:</th>
                            <td>{bill.total_ht} Dhs
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Total TTC:</th>
                            <td>{bill.total_ttc} Dhs
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Méthode de paiement:</th>
                            <td>{bill.payment_method && bill.payment_method.title}
                            {!bill.payment_method && "--"}
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
