import React from 'react'
import { convert_to_rental} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class ConvertToRental extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      bookingId: props.bookingId
    }
  }
  render() {
    let {bookingId} = this.state
    return (
      <Mutation mutation={convert_to_rental} variables={{id:bookingId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.convertBookingToRental.id){
                      this.props.flashMessages.set('La location a bien été crée.', 'success')
                      Router.push("/rentals/view?rentalId="+result.data.convertBookingToRental.id);
                  }
                })
              }}
                  className="btn btn-success btn-sm"  style={{color:'white',marginRight:'4px'}}>
                  <i className="fa fa-random"></i>
                  Convertir en location
             </a>
          }
      </Mutation>

    )
  }
}

export default withFlashMessages(withData(withRouter(ConvertToRental)))
