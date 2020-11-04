import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import BrandSelectInput from '../brand/SelectInput'
import ColorSelectInput from '../Color/SelectInput'
import StatusSelectInput from '../status/SelectInput'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      car:{
        plate_number:"",
        brandId:0,
        statusId:0
      }
    }
  }
  setPlateNumber(value){
    this.state.car.plate_number = value
    this.setState({car:this.state.car})
  }
  setBrandId(value){
    this.state.car.brandId = value
    this.setState({car:this.state.car})
  }
  setStatusId(value){
    this.state.car.statusId = value
    this.setState({car:this.state.car})
  }
  render () {
    const {
      car
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/cars/list?plate_number="+car.plate_number+"&brandId="+car.brandId+"&statusId=" +car.statusId);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control value={car.plate_number} type="text" onChange={(event)=>this.setPlateNumber(event.target.value)} placeholder="Immatriculation ..." />
                  </Form.Group>
                 </div>
                <div className="col-3">
                   <BrandSelectInput onChange={(value)=>this.setBrandId(value)}/>
                 </div>
                  <div className="col-3">
                     <StatusSelectInput onChange={(value)=>this.setStatusId(value)} />
                  </div>
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
