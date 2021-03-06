import React from 'react'
import { delete_booking} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { bookingId } = this.props.router.query
    this.state={
      bookingId: bookingId,
      booking:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Réservations",path:"/bookings/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La réservation a bien été supprimée.', 'success')
    this.props.history.push("/bookings/list");
  }
  render() {
    let {bookingId} = this.props
    return (
      <Mutation mutation={delete_booking} variables={{id:bookingId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteBooking.statut_code==1){
                      this.props.flashMessages.set('La réservation a bien été supprimée.', 'success')
                      Router.push("/bookings/list");
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
