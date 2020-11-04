import React from 'react'
import { delete_rental} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { rentalId } = this.props.router.query
    this.state={
      rentalId: rentalId,
      rental:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    this.props.history.push("/rentals/list");
  }
  render() {
    let {rentalId} = this.props
    return (
      <Mutation mutation={delete_rental} variables={{id:rentalId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteRental.statut_code==1){
                      this.props.flashMessages.set('La location a bien été supprimée.', 'success')
                      Router.push("/rentals/list");
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
