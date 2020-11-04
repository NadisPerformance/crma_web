import React from 'react'
import { delete_category} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'


class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { categoryId } = this.props.router.query
    this.state={
      categoryId: categoryId,
      category:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Catégories",path:"/categories/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La catégorie a bien été supprimée.', 'success')
    this.props.history.push("/categories/");
  }
  render() {
    let {categoryId} = this.props
    return (
      <Mutation mutation={delete_category} variables={{id:categoryId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteCategory.statut_code==1){
                      this.props.flashMessages.set('La categorie a bien été supprimée.', 'success')
                      Router.push("/categories/list");
                  }
                })
              }}
                  className="btn btn-danger btn-sm" >
                  <i className="fa fa-trash" style={{color:'white'}}></i>
             </a>
          }
      </Mutation>

    )
  }
}

export default withFlashMessages(withData(withRouter(DeleteButton)))
