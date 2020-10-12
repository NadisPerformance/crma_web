import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_customer} from './queries'
import { Query } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
class View extends React.Component {
  constructor (props) {
    super(props)   
    const { customerId } = this.props.router.query
    this.state={
      customerId: customerId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"/customer/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('Le client a bien été supprimé.', 'success')
    this.props.history.push("/customers/");
  }
  header(){ 
    const { customerId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Client #"+customerId}</h3>

                <div className="card-tools">
                    <Link href={"/customers/edit?customerId="+customerId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a> 
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {   
    const {customerId} = this.state
    return (
      <AdminLayout>
        <Page title="Marques" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_customer} variables={{customerId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div> Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div> 
                }   
                console.log(data) 
                if(!data.customer)
                  return " customer not found"
                return (  
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Nom</th>
                                  <td>{data.customer.lastname}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Prenom:</th>
                                  <td>{data.customer.firstname}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>anniversaire:</th>
                                  <td>{data.customer.birthday}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Civilité:</th>
                                  <td>{data.customer.gender}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>CNI:</th>
                                  <td>{data.customer.cni}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Type:</th>
                                  <td>{data.customer.type}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Permis de conduite:</th>
                                  <td>{data.customer.driver_license}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Ville:</th>
                                  <td>{data.customer.city}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Adresse:</th>
                                  <td>{data.customer.address}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>E-mail:</th>
                                  <td>{data.customer.email}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Téléphone:</th>
                                  <td>{data.customer.phone}</td>
                                </tr>

                                <tr>
                                  <th style={{width:"50%"}}>Société:</th>
                                  <td>{data.customer.company_name}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>  
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody> 
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.customer.createdAt).toLocaleString()}</td>
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