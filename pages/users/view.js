import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_user} from '../../components/user/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import UserDeleteButton from '../../components/user/DeleteButton'
class View extends React.Component {
  constructor (props) {
    super(props)
    const { userId } = this.props.router.query
    this.state={
      userId: userId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Utilisateurs",path:"/users/list"},{title:"Utilisateur #"+userId,path:"/users/view?userId="+userId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/users/");
  }
  header(){
    const { userId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Utilisateur #"+userId}</h3>

                <div className="card-tools">
                    <Link href={"/users/edit?userId="+userId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <UserDeleteButton userId={userId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {userId} = this.state
    return (
      <AdminLayout>
        <Page title="Utilisateurs" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_user} variables={{userId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.user)
                  return "User not found"
                return (
                  <Row className="col-sm-12">
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                              <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Nom:</th>
                                  <td>{data.user.firstname}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}} >Prénom:</th>
                                  <td>{data.user.lastname}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Civilisation:</th>
                                  <td>{data.user.gender}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}} >CNI:</th>
                                  <td>{data.user.cni}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Adresse:</th>
                                  <td>{data.user.address}</td>
                                </tr>
                                <tr>
                                  <th>Email:</th>
                                  <td>{data.user.email}</td>
                                </tr>
                                <tr>
                                  <th>Téléphone:</th>
                                  <td>{data.user.phone}</td>
                                </tr>
                                <tr>
                                  <th>Mot de passe:</th>
                                  <td>
                                    ******
                                    <Link href={"/users/edit-password?userId="+data.user.id} >
                                      <a style={{margin:3}}
                                      className="btn btn-info btn-sm sss" >
                                      <i className="fa fa-pen-alt"></i>
                                      </a>
                                    </Link>
                                  </td>
                                </tr>

                              </tbody>
                          </table>
                      </Col>
                      <Col className="col-sm-6 table-responsive">
                          <table className="table">
                             <tbody>
                                <tr>
                                  <th style={{width:"50%"}}>Date de création:</th>
                                  <td>{ new Date(data.user.createdAt).toLocaleString()}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}}>Dernière modification:</th>
                                  <td>{ new Date(data.user.updatedAt).toLocaleString()}</td>
                                </tr>
                                <tr>
                                  <th style={{width:"50%"}} >Rôle:</th>
                                  <td>{data.user.role && data.user.role.title}</td>
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
