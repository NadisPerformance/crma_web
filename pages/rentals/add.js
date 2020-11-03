import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_rental} from '../../components/rental/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import RentalForm from '../../components/rental/RentalForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/list"},{title:"Nouvelle location",path:"/rentals/add"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/rentals/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle location "}</h3>

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
    let {rental} = this.state
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
            <Mutation mutation={create_rental} variables={{data:this.state.rental}} >
              {postMutation =>
                 <RentalForm
                  rental={rental}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('La location a bien été crée.', 'success')
                            Router.push("/rentals/view?rentalId="+result.data.createRental.id);
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
