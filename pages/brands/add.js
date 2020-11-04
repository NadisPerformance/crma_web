import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_brand} from '../../components/brand/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BrandForm from '../../components/brand/BrandForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Marque",path:"/brands/list"},{title:"Nouvelle marque",path:"/brands/add"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La marque a bien été supprimée.', 'success')
    this.props.history.push("/brands/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle marque "}</h3>

                <div className="card-tools">
                    <Link href={"/brands/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {brand} = this.state
    return (
      <AdminLayout>
        <Page title="Marques" fariane={this.fariane}>
            <Mutation mutation={create_brand} variables={{data:this.state.brand}} >
              {postMutation =>
                 <BrandForm
                 brand={brand}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('La marque a bien été crée.', 'success')
                            Router.push("/brands/view?brandId="+result.data.createBrand.id);
                          })
                        }}
                        onChange={(brand)=>this.setState({brand:brand})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
