import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_brands} from '../../components/brand/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import BrandDeleteButton from '../../components/brand/DeleteButton'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/brand/SearchForm'
import { withRouter } from 'next/router'
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Marques",path:"/brands/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.brand)
    return (<React.Fragment>
             <h3 className="card-title">Marques</h3>
              <div className="card-tools">
                    <Link href="/brands/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle marque
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La marque a bien été supprimée.', 'success')
    //this.props.history.push("/users/");
  }
  render() {
    const {
      limit, page
    } = this.state
    const {name} = this.props.router.query
    var where = {}
    if( name )
      where.name = {contains:name}
    return (
      <AdminLayout>
        <Page title="Marques" fariane={this.fariane}>
          <SearchForm />
          <Card header={this.header()} >
            <Query query={get_brands} variables={{limit:limit,page:page,where:where}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                if( data.brands.edges.length == 0)
                  return (<p><center> Aucune marque trouvée.</center></p>)
                return (
                  <React.Fragment>
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
                          data.brands.edges.map((edge, index)=>{
                            let brand = edge.node
                            return (
                              <tr key={brand.id}>
                                <td>{brand.id}</td>
                                <td>{brand.name}</td>
                                <td>
                                  <Link href={"/brands/view?brandId="+brand.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/brands/edit?brandId="+brand.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <BrandDeleteButton brandId={brand.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                      currentPage={data.brands.pageInfo.currentPage}
                      count={data.brands.pageInfo.count}
                      perPage={this.state.limit}
                      onChange={(page)=>this.setState({page:page})}
                      />
                  </React.Fragment>
                )
              }}
              </Query>
          </Card>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(List), true)
