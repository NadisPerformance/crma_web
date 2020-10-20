import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_insurance} from '../../components/insurance/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import InsuranceTab from '../../components/insurance/Tabs/InsuranceTab'
import CustomerTab from '../../components/insurance/Tabs/CustomerTab'
import CarTab from '../../components/insurance/Tabs/CarTab'
import InsuranceDeleteButton from '../../components/insurance/DeleteButton'

class View extends React.Component {
  constructor (props) {
    super(props)
    const { insuranceId } = this.props.router.query
    this.state={
      insuranceId: insuranceId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/insurance/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    this.props.history.push("/insurances/");
  }
  header(){
    const { insuranceId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+insuranceId}</h3>

                <div className="card-tools">
                    <Link href={"/insurances/edit?insuranceId="+insuranceId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <InsuranceDeleteButton insuranceId={insuranceId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {insuranceId} = this.state
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_insurance} variables={{insuranceId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.insurance)
                  return "Insurance not found"
                return (
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Nom de l\'assurance</th>
                                  <td>{data.insurance.name}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.insurance.createdAt).toLocaleString()}</td>
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
