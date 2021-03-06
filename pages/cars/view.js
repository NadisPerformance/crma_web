import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_car} from '../../components/car/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col, Tabs, Tab} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CarTab from '../../components/car/Tabs/CarTab'
import CalendarTab from '../../components/car/Tabs/CalendarTab'
import CarInsurancesTab from '../../components/car/Tabs/CarInsurancesTab'
import TechnicalControlTab from '../../components/car/Tabs/TechnicalControlTab'
import CarDeleteButton from '../../components/car/DeleteButton'
class View extends React.Component {
  constructor (props) {
    super(props)
    const { carId } = this.props.router.query
    this.state={
      carId: carId
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/cars/list"},{title:"Véhicule #"+carId,path:"/cars/view?carId="+carId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le véhicule a bien été supprimée.', 'success')
    this.props.history.push("/cars/");
  }
  header(){
    const { carId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Véhicule #"+carId}</h3>

                <div className="card-tools">
                    <Link href={"/cars/edit?carId="+carId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                    <CarDeleteButton carId={carId} />
                </div>
          </React.Fragment>
  }
  render() {
    const {carId} = this.state
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_car} variables={{carId}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.car)
                  return "Car not found"
                return (
                  <Tabs   defaultActiveKey="car" id="uncontrolled-tab-example" style={{backgroundColor:'#f4f6f9',margin:'3px',paddingBottom:'2px'}}>
                    <Tab eventKey="car" title="Véhicule" >
                       <CarTab car={data.car} />
                    </Tab>
                    <Tab eventKey="car_insurance" title="Assurance" >
                       <CarInsurancesTab car_insurances={data.car.car_insurances} />
                    </Tab>
                    <Tab eventKey="technical_control" title="Contrôle technique" >
                       <TechnicalControlTab technical_controls={data.car.technical_controls} carId={data.car.id} />
                    </Tab>
                    <Tab eventKey="calendar" title="Calendrier des disponibilitées" >
                       <CalendarTab rentals={data.car.rentals} bookings={data.car.bookings}/>
                    </Tab>
                  </Tabs>
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
