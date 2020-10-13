import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_cars} from './queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import CarDeleteButton from './DeleteButton'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Cars",path:"/cars/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.car)
    return (<React.Fragment>
             <h3 className="card-title">Véhicules</h3>
              <div className="card-tools">
                    <Link href="/cars/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouveau véhicule
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('Le véhicule a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_cars} pollInterval={3000} >
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
                          <th>Marque</th>
                          <th>Model</th>
                          <th>Catégorie</th>
                          <th>Prix journal</th>
                          <th>Couleur</th>
                          <th>Immatriculation</th>
                          <th>Chassis number</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.cars.edges.map((edge, index)=>{
                            let car = edge.node
                            return (
                              <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand.name}</td>
                                <td>{car.model_date} {car.model}</td>
                                <td>{car.category.title}</td>
                                <td>{car.price}</td>
                                <td>{car.color && car.color.name}</td>
                                <td>{car.plate_number}</td>
                                <td>{car.chassis_number}</td>
                                <td>{"car.status.statusId"}</td>
                                <td>
                                  <Link href={"/cars/view?carId="+car.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/cars/edit?carId="+car.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <CarDeleteButton carId={car.id} />
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
