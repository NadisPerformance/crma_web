import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_categories} from './queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Categories",path:"/categories/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.category)
    return (<React.Fragment>
             <h3 className="card-title">Marques</h3>
              <div className="card-tools">
                    <Link href="/categories/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle marque
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    //this.props.history.push("/users/");
  }
  render() {
    return (
      <AdminLayout>
        <Page title="Marques" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_categories} pollInterval={3000} >
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.categories.edges.map((edge, index)=>{
                            let category = edge.node
                            return (
                              <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.title}</td>
                                <td>
                                  <Link href={"/categories/view?categoryId="+category.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/categories/edit?categoryId="+category.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  
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