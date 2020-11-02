import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import moment from 'moment'
import { withRouter } from 'next/router'
import Link from 'next/link'
import TechnicalControleDeleteButton from '../../technical_control/DeleteButton'
class TechnicalControlTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {technical_controls, carId} = this.props
    if (!technical_controls)
      return <p><center>Aucune contrôle technique attaché au véhicule.</center></p>
    return (
      <Row className="col-sm-12">
        <Link href={"/technical_controls/add?carId="+carId} >
          <a style={{margin:3}}
          className="btn btn-info btn-sm" >
            <i className="fa fa-plus"></i> Nouveau contrôle technique
          </a>
        </Link>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Document</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            technical_controls.map((technical_control, index)=>{
              return (
                <tr key={technical_control.id}>
                  <td>{technical_control.id}</td>
                  <td>{moment(technical_control.date_begin).format("DD/MM/YYYY")}</td>
                  <td>{moment(technical_control.date_end).format("DD/MM/YYYY")} </td>
                  <td>
                    { technical_control.scanned_technical_control_url && <a target="_blank" href={technical_control.scanned_technical_control_url} > Télécharger </a>}
                    { !technical_control.scanned_technical_control_url && "--"}
                  </td>                  <td>
                    <Link href={"/technical_controls/view?technical_controlId="+technical_control.id} >
                      <a style={{margin:3}}
                      className="btn btn-info btn-sm" >
                      <i className="fa fa-eye"></i>
                      </a>
                    </Link>
                    <Link href={"/technical_controls/edit?technical_controlId="+technical_control.id} >
                      <a  style={{margin:3}}
                      className="btn btn-success btn-sm" >
                      <i className="fa fa-pen-alt"></i>
                      </a>
                    </Link>
                    <TechnicalControleDeleteButton technical_controlId={technical_control.id} />
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

export default withRouter(TechnicalControlTab)
