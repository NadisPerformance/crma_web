import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_category} from '../../components/category/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CategoryForm from '../../components/category/CategoryForm'
import { withFlashMessages } from 'next-flash-messages'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Categories",path:"/categories/list"},{title:"Nouvelle categorie",path:"/categories/add"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La categorie a bien été supprimée.', 'success')
    this.props.history.push("/categories/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle categorie "}</h3>

                <div className="card-tools">
                    <Link href={"/categories/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {category} = this.state
    return (
      <AdminLayout>
        <Page title="Categories" fariane={this.fariane}>
            <Mutation mutation={create_category} variables={{data:this.state.category}} >
              {postMutation =>
                 <CategoryForm
                 category={category}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            this.props.flashMessages.set('La catégorie a bien été crée.', 'success')
                            Router.push("/categories/view?categoryId="+result.data.createCategory.id);
                          })
                        }}
                        onChange={(category)=>this.setState({category:category})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withFlashMessages(withData(withRouter(Add)))
