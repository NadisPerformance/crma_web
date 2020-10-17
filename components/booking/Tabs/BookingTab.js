import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'

import { withRouter } from 'next/router'
class BookingTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {booking} = this.props
    if(!booking)
     return null
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody>

                        <tr>
                            <th style={{width:"50%"}} >Date de début:</th>
                            <td>{moment(booking.date_begin).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Date de fin:</th>
                            <td>{moment(booking.date_end).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Montant payé à l'avance:</th>
                            <td>{booking.montant_avance>0 && booking.montant_avance+' Dhs'}
                                {booking.montant_avance==0 && '--'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    )
  }
}

export default withRouter(BookingTab)
