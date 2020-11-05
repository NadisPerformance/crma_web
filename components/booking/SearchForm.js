import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import CarSelectInput from '../car/SelectInput'
import CustomerSelectInput from '../customer/SelectInput'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      booking:{
        customerId:0,
        carId:0
      }
    }
  }
  setCustomerId(value){
    this.state.booking.customerId = value
    this.setState({booking:this.state.booking})
  }
  setCarId(value){
    this.state.booking.carId = value
    this.setState({booking:this.state.booking})
  }
  render () {
    const {
      booking
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/bookings/list?customerId="+booking.customerId+"&carId="+booking.carId);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                   <CustomerSelectInput onChange={(value)=>this.setCustomerId(value)}/>
                 </div>
                  <div className="col-3">
                     <CarSelectInput onChange={(value)=>this.setCarId(value)} />
                  </div>
                  <div className="col-3"></div>
                 <div className="col-3">
                 <button type="submit" class="btn btn-primary  float-right">Rechercher</button>

                 </div>

              </div>
              </div>
              </Form>
          </div>
    )
  }
}

export default SearchForm
