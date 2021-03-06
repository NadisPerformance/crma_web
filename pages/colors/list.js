import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_colors} from '../../components/color/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import ColorDeleteButton from '../../components/color/DeleteButton'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/color/SearchForm'
import { withRouter } from 'next/router'
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Couleurs",path:"/colors/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.color)
    return (<React.Fragment>
             <h3 className="card-title">Couleurs</h3>
              <div className="card-tools">
                    <Link href="/colors/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle couleur
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
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
        <Page title="Couleurs" fariane={this.fariane}>
          <SearchForm />
          <Card header={this.header()} >
            <Query query={get_colors} variables={{limit:limit,page:page,where:where}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                if( data.colors.edges.length == 0)
                  return (<p><center> Aucune couleur trouvée.</center></p>)
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
                          data.colors.edges.map((edge, index)=>{
                            let color = edge.node
                            return (
                              <tr key={color.id}>
                                <td>{color.id}</td>
                                <td>{color.name}</td>
                                <td>
                                  <Link href={"/colors/view?colorId="+color.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/colors/edit?colorId="+color.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <ColorDeleteButton colorId={color.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                    currentPage={data.colors.pageInfo.currentPage}
                    count={data.colors.pageInfo.count}
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
