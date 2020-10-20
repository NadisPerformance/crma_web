import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_technical_control} from '../../components/technical_control/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import TechnicalControlDeleteButton from '../../components/technical_control/DeleteButton'

class View extends React.Component {
  constructor (props) {
    super(props)
    const { technical_controlId } = this.props.router.query
    this.state={
      technical_controlId: technical_controlId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/technical_controls/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    this.props.history.push("/technical_controls/");
  }
  header(){
    const { technical_controlId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Assurance #"+technical_controlId}</h3>

                <div className="card-tools">
                    <Link href={"/technical_control/edit?technical_controlId="+technical_controlId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <TechnicalControlDeleteButton technical_controlId={technical_controlId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {technical_controlId} = this.state
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_technical_control} variables={{technical_controlId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.technical_control)
                  return "Technical control not found"
                return (
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Nom de l'assurance</th>
                                  <td>{data.technical_control.name}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.technical_control.createdAt).toLocaleString()}</td>
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
