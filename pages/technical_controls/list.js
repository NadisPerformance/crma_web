import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_technical_controls} from '../../components/technical_control/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import TechnicalControlDeleteButton from '../../components/technical_control/DeleteButton'
import moment from 'moment'


class List extends React.Component {
  constructor (props) {
    super(props)
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Contrôle technique",path:"/technical_control/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.technical_control)
    return (<React.Fragment>
             <h3 className="card-title">Assurances</h3>
              <div className="card-tools">
                    <Link href="/technical_controls/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle assurance
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_technical_controls} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                return (
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Nom</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.technical_controls.edges.map((edge, index)=>{
                            let technical_control = edge.node
                            return (
                              <tr key={technical_control.id}>
                                <td>{technical_control.id}</td>
                                <td>{technical_control.name}</td>
                                <td>
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
                                  <TechnicalControlDeleteButton technical_controlId={technical_control.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                )
              }}
              </Query>
          </Card>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(List, true)
