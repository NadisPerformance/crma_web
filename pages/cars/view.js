import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_car} from './queries'
import { Query } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
class View extends React.Component {
  constructor (props) {
    super(props)   
    const { carId } = this.props.router.query
    this.state={
      carId: carId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Cars",path:"/cars/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('Le véhicule a bien été supprimée.', 'success')
    this.props.history.push("/cars/");
  }
  header(){ 
    const { carId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Utilisateur #"+carId}</h3>

                <div className="card-tools">
                    <Link href={"/cars/edit?carId="+carId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a> 
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {   
    const {carId} = this.state
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_car} variables={{carId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div> 
                }   
                console.log(data) 
                if(!data.car)
                  return "Car not found"
                return (  
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody> 
                                <tr>
                                  <th style={{width:"50%"}} >Marque:</th>
                                  <td>{data.car.brand.name}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}} >Modéle:</th>
                                  <td>{data.car.model}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Date du modéle:</th>
                                  <td>{data.car.model_date}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Immatriculation:</th>
                                  <td>{data.car.plate_number}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Numéro de chassis:</th>
                                  <td>{data.car.chassis_number}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}} >Catégorie:</th>
                                  <td>{"data.car.category.name"}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Prix:</th>
                                  <td>{data.car.price}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Couleur:</th>
                                  <td>{"data.car.color.name"}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Status:</th>
                                  <td>{"data.car.status.title"}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>  
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody> 
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.car.createdAt).toLocaleString()}</td>
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