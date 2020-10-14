import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_category, update_category} from './queries'
import { Query, Mutation } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
import CategoryForm from './CategoryForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)   
    const { categoryId } = this.props.router.query
    this.state={
      categoryId: categoryId,
        category:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Categories",path:"/categories/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
    this.props.history.push("/categories/");
  }
  header(){ 
    const { categoryId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Categories #"+categoryId}</h3>

                <div className="card-tools">
                    <Link href={"/categories/edit/"+categoryId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a> 
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {   
    let {categoryId, category} = this.state
    if(category)
      delete category.id
    return (
      <AdminLayout>
        <Page title="Categories" fariane={this.fariane}>
            <Query query={get_category} variables={{categoryId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div> 
                }   
                console.log(data) 
                if(!data.category)
                  return "Category not found"
                if(this.state.category == null){
                    delete data.category.__typename
                    category = this.state.category = data.category 
                }
                //console.log(user)
                return (  
                    <Mutation mutation={update_category} variables={{id:categoryId,data:this.state.category}} >
                      {postMutation => 
                      <CategoryForm 
                        category={category}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault(); 
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('La couleur a bien été modifié.', 'success')
                            Router.push("/category/view?categoryId="+result.data.updateCategory.id);
                          })
                        }} 
                        onChange={(category)=>this.setState({category:category})}
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