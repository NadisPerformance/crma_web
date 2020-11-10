import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_rental} from '../../components/rental/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col,Tab,Tabs} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import RentalTab from '../../components/rental/Tabs/RentalTab'
import CustomerTab from '../../components/rental/Tabs/CustomerTab'
import CarTab from '../../components/rental/Tabs/CarTab'
import PaymentTab from '../../components/rental/Tabs/PaymentTab'
import BeforeRentalTab from '../../components/rental/Tabs/BeforeRentalTab'
import AfterRentalTab from '../../components/rental/Tabs/AfterRentalTab'
import RentalDeleteButton from '../../components/rental/DeleteButton'

class View extends React.Component {
  constructor (props) {
    super(props)
    const { rentalId } = this.props.router.query
    this.state={
      rentalId: rentalId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rental/"},{title:"Location #"+rentalId,path:"/rentals/view?rentalId="+rentalId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    this.props.history.push("/rentals/");
  }
  header(){
    const { rentalId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+rentalId}</h3>

                <div className="card-tools">
                    <Link href={"/rentals/edit?rentalId="+rentalId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <RentalDeleteButton rentalId={rentalId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {rentalId} = this.state
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_rental} variables={{rentalId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.rental)
                  return "Rental not found"
                return (
                  <React.Fragment>
                  <Tabs   defaultActiveKey="rental" id="uncontrolled-tab-example" style={{backgroundColor:'#f4f6f9',margin:'3px',paddingBottom:'2px'}}>
                    <Tab eventKey="rental" title="Location" >
                       <RentalTab rental={data.rental} />
                    </Tab>
                    <Tab eventKey="before_rental" title="Début de location">
                       <BeforeRentalTab before_rental={data.rental.before_rental} rentalId={data.rental.id}/>
                    </Tab>
                    <Tab eventKey="after_rental" title="Fin de location">
                      <AfterRentalTab after_rental={data.rental.after_rental} rentalId={data.rental.id}/>
                    </Tab>
                    <Tab eventKey="customer" title="Client">
                      <CustomerTab customer={data.rental.customer} />
                    </Tab>

                    <Tab eventKey="car" title="Véhicule" >
                      <CarTab car={data.rental.car} />
                    </Tab>
                    <Tab eventKey="payment" title="Paiement" >
                      <PaymentTab rental={data.rental} />
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
