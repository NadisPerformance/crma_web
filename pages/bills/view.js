import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_bill} from '../../components/bill/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BillTab from '../../components/bill/Tabs/BillTab'
import CustomerTab from '../../components/bill/Tabs/CustomerTab'
import RentalTab from '../../components/bill/Tabs/RentalTab'
import BillDeleteButton from '../../components/bill/DeleteButton'

class View extends React.Component {
  constructor (props) {
    super(props)
    const { billId } = this.props.router.query
    this.state={
      billId: billId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Factures",path:"/bills/list"},{title:"Facture #"+billId,path:"/bills/view?billId="+billId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La facture a bien été supprimée.', 'success')
    this.props.history.push("/bills/");
  }
  header(){
    const { billId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Facture #"+billId}</h3>

                <div className="card-tools">
                    <Link href={"/bills/edit?billId="+billId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <BillDeleteButton billId={billId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {billId} = this.state
    return (
      <AdminLayout>
        <Page title="Factures" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_bill} variables={{billId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.bill)
                  return "bill not found"
                return (
                  <React.Fragment>
                  <br/>
                  <Tabs  defaultActiveKey="bill" id="uncontrolled-tab-example" style={{backgroundColor:'#f4f6f9',marginLeft:'3px',paddingBottom:'2px'}}>
                    <Tab eventKey="bill" title="Facture" >
                       <BillTab bill={data.bill} />
                    </Tab>
                    <Tab eventKey="customer" title="Client">
                      <CustomerTab customer={data.bill.customer} />
                    </Tab>
                    <Tab eventKey="rental" title="Location" >
                      <RentalTab rental={data.bill.rental} />
                    </Tab>
                  </Tabs>
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

export default withData(withRouter(View))
