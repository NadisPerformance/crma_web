import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'

import { withRouter } from 'next/router'
import {create_bill} from '../../bill/queries.js'
import { Query, Mutation } from 'react-apollo'
import PaymentForm from '../PaymentForm'
import { withFlashMessages } from 'next-flash-messages'

class PaymentTab extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      bill:null
    }
  }
  render() {
    let {bill} = this.state
    let {rental} = this.props
    if (!rental)
      return null
    return (
              <Mutation mutation={create_bill} variables={{data:this.state.bill}} >
                {postMutation =>
                   <PaymentForm
                      bill={bill}
                      rental={rental}
                      onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(car)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              this.props.flashMessages.set('Le paiement  a bien été validé.', 'success')
                              //Router.push("/cars/view?carId="+result.data.createCar.id);
                            })
                          }}
                     onChange={(bill)=>this.setState({bill:bill})}
                           />
                }
            </Mutation>
    )
  }
}

export default withRouter(withFlashMessages(PaymentTab))
