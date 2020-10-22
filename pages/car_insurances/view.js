import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_car_insurance} from '../../components/car_insurance/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CarInsuranceDeleteButton from '../../components/car_insurance/DeleteButton'
import moment from 'moment'


class View extends React.Component {
  constructor (props) {
    super(props)
    const { car_insuranceId } = this.props.router.query
    this.state={
      car_insuranceId: car_insuranceId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/car_insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'assurance a bien été supprimée pour ce véhicule.', 'success')
    this.props.history.push("/car_insurances/");
  }
  header(){
    const { car_insuranceId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Assurance #"+car_insuranceId}</h3>

                <div className="card-tools">
                    <Link href={"/car_insurances/edit?car_insuranceId="+car_insuranceId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <CarInsuranceDeleteButton car_insuranceId={car_insuranceId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {car_insuranceId} = this.state
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_car_insurance} variables={{car_insuranceId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.car_insurance)
                  return "Technical control not found"
                return (
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Société d'assurance</th>
                                  <td>{data.car_insurance.insurance && data.car_insurance.insurance.name}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Date de début</th>
                                  <td>{moment(data.car_insurance.date_begin).format("DD/MM/YYYY")}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Date de fin</th>
                                  <td>{moment(data.car_insurance.date_end).format("DD/MM/YYYY")}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.car_insurance.createdAt).toLocaleString()}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>
                  </Row>
                )
              }}
              </Query>
          </Card>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(View))
