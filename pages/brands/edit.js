import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_brand, update_brand} from '../../components/brand/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BrandForm from '../../components/brand/BrandForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { brandId } = this.props.router.query
    this.state={
        brandId: brandId,
        brand:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Brands",path:"/brands/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/brands/");
  }
  header(){
    const { brandId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Marques #"+brandId}</h3>

                <div className="card-tools">
                    <Link href={"/brands/edit/"+brandId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {brandId, brand} = this.state
    if(brand)
      delete brand.id
    return (
      <AdminLayout>
        <Page title="Marques" fariane={this.fariane}>
            <Query query={get_brand} variables={{brandId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.brand)
                  return "Brand not found"
                if(this.state.brand == null){
                    delete data.brand.__typename
                    brand = this.state.brand = data.brand
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_brand} variables={{id:brandId,data:this.state.brand}} >
                      {postMutation =>
                      <BrandForm
                        brand={brand}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('La marque a bien été modifié.', 'success')
                            Router.push("/brand/view?brandId="+result.data.updateBrand.id);
                          })
                        }}
                        onChange={(brand)=>this.setState({brand:brand})}
                         />
                      }
                    </Mutation>
                )
              }}
              </Query>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Edit))
