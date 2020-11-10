import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'

import { withRouter } from 'next/router'
class PaymentTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {rental} = this.props
    if (!rental)
      return null
    return (
        <Row className="col-sm-12">
            <Col className="col-sm-6 table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th style={{width:"50%"}} >Nombre de jours:</th>
                            <td>5 jour(s)</td>
                        </tr> 
                    </tbody>
                </table>
            </Col>
        </Row>
    )
  }
}

export default withRouter(PaymentTab)
