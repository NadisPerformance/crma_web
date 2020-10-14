import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_category} from './queries'
import { Query } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
class View extends React.Component {
  constructor (props) {
    super(props)   
    const { categoryId } = this.props.router.query
    this.state={
      categoryId: categoryId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Categories",path:"/categories/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
    this.props.history.push("/categories/");
  }
  header(){ 
    const { categoryId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Categorie #"+categoryId}</h3>

                <div className="card-tools">
                    <Link href={"/categories/edit?categoryId="+categoryId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a> 
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {   
    const {categoryId} = this.state
    return (
      <AdminLayout>
        <Page title="Categories" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_category} variables={{categoryId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div> 
                }   
                console.log(data) 
                if(!data.category)
                  return " Category not found"
                return (  
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Nom de la catégorie:</th>
                                  <td>{data.category.name}</td>
                                </tr>
                              </tbody>
                          </table>
                      </Col>  
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody> 
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{false && new Date(data.category.createdAt).toLocaleString()}</td>
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