import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_insurances} from '../../components/insurance/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import InsuranceDeleteButton from '../../components/insurance/DeleteButton'
import moment from 'moment'
import Pagination from '../../components/Pagination'
import Search from '../../components/insurance/Search'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.insurance)
    return (<React.Fragment>
             <h3 className="card-title">Assurances</h3>
              <div className="card-tools">
                    <Link href="/insurances/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle assurance
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('L\'assurance a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    const {
      limit, page
    } = this.state
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_insurances} variables={{limit:limit,page:page}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                return (
                  <React.Fragment>
                    <Search />
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
                          data.insurances.edges.map((edge, index)=>{
                            let insurance = edge.node
                            return (
                              <tr key={insurance.id}>
                                <td>{insurance.id}</td>
                                <td>{insurance.name}</td>
                                <td>
                                  <Link href={"/insurances/view?insuranceId="+insurance.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/insurances/edit?insuranceId="+insurance.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <InsuranceDeleteButton insuranceId={insurance.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                      currentPage={data.insurances.pageInfo.currentPage}
                      count={data.insurances.pageInfo.count}
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

export default withData(List, true)
