import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_before_rental} from '../../components/before_rental/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BeforeRentalForm from '../../components/before_rental/BeforeRentalForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    const { rentalId } = this.props.router.query
    this.state={
      before_rental:{
        rentalId: rentalId * 1,
        comment: "",
        niveau_carburant:0,
        kilometrage: 0
      }
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/list"}]
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Marquer le début de location "}</h3>

                <div className="card-tools">
                    <Link href={"/rentals/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {before_rental} = this.state
    return (
      <AdminLayout>
        <Page title="Marquer le début de location" fariane={this.fariane}>
            <Mutation mutation={create_before_rental} variables={{data:this.state.before_rental}} >
              {postMutation =>
                 <BeforeRentalForm
                  before_rental={before_rental}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('La début de location a bien été crée.', 'success')
                            Router.push("/rentals/view?rentalId="+result.data.createBeforeRental.rentalId);
                          })
                        }}
                        onChange={(rental)=>this.setState({rental:rental})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
