import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import CustomerSelectInput from '../customer/SelectInput'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      bill:{
        customerId:0,
        carId:0
      }
    }
  }
  setCustomerId(value){
    this.state.bill.customerId = value
    this.setState({bill:this.state.bill})
  }
  setRentalId(value){
    this.state.bill.rentalId = value
    this.setState({bill:this.state.bill})
  }
  render () {
    const {
        bill
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/bills/list?customerId="+bill.customerId+"&rentalId="+bill.rentalId);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                   <CustomerSelectInput onChange={(value)=>this.setCustomerId(value)}/>
                 </div>
                  <div className="col-3"></div>
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
