import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_users} from '../../components/user/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import UserDeleteButton from '../../components/user/DeleteButton'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/user/SearchForm'
import { withRouter } from 'next/router'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Utilisateurs",path:"/users/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.user)
    return (<React.Fragment>
             <h3 className="card-title">Utilisateurs</h3>
              <div className="card-tools">
                    <Link href="/users/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouveau utilisateur
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
    const {
      limit, page
    } = this.state
    const { firstname, lastname, cni, roleId, email, phone } = this.props.router.query
    var where = {}
    if( firstname )
      where.firstname = {contains:firstname}
    if( lastname )
      where.lastname = {contains:lastname}
    if( cni )
      where.cni = {contains:cni}
      if( roleId && roleId != 0)
      where.roleId = {equals:roleId *1}
    if( email )
      where.email = {contains:email}
    if( phone )
      where.phone = {contains:phone}
    return (
      <AdminLayout>
        <Page title="Utilisateurs" fariane={this.fariane}>
          <SearchForm />
          <Card header={this.header()} >
            <Query query={get_users} variables={{limit:limit,page:page,where:where}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                if( data.users.edges.length == 0)
                  return (<p><center> Aucun utilisateur trouvé.</center></p>)
                return (
                  <React.Fragment>
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Nom complet</th>
                          <th>CNI</th>
                          <th>E-mail</th>
                          <th>Téléphone</th>
                          <th>Rôle</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.users.edges.map((edge, index)=>{
                            let user = edge.node
                            return (
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.gender} {user.firstname} {user.lastname}</td>
                                <td>{user.cni}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.role.title}</td>
                                <td>
                                  <Link href={"/users/view?userId="+user.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/users/edit?userId="+user.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <UserDeleteButton userId={user.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                      currentPage={data.users.pageInfo.currentPage}
                      count={data.users.pageInfo.count}
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
