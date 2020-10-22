import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import InsuranceInput  from '../insurance/SelectInput'
class CarInsuranceForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      car_insurance:{
        carId:0,
        insuranceId:0,
        date_begin:"",
        date_end:""
      }
    }
  }
  componentDidMount(){
    const {car_insurance} = this.props
    if(car_insurance){
      this.state.car_insurance = car_insurance
    }
    this.onChange()
  }

  setInsuranceId(value){
    this.state.car_insurance.insuranceId = value*1
    this.setState({car_insurance:this.state.car_insurance})
    this.onChange();
  }

  setDateBegin(value){
    this.state.car_insurance.date_begin = value
    this.setState({car_insurance:this.state.car_insurance})
    this.onChange();
  }

  setDateEnd(value){
    this.state.car_insurance.date_end = value
    this.setState({car_insurance:this.state.car_insurance})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.car_insurance)
  }
  render () {
    const {car_insurance, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="hidden" value={car_insurance.carId}  onChange={(event)=>this.setCarId(event.target.value)} placeholder="Nom de l'assurance" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <InsuranceInput  selectedId={car_insurance.insuranceId}  onChange={(selectedId)=>this.setInsuranceId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de début:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(car_insurance.date_begin).toDate())}
              onChange={date => this.setDateBegin(date)}
              isClearable
              dateFormat="dd/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(car_insurance.date_end).toDate())}
              onChange={date => this.setDateEnd(date)}
              isClearable
              dateFormat="dd/MM/yyyy"
              placeholderText="Date fin"
            />
          </Form.Group>
          <div className="text-right" style={{margin:10}}>
                <Button   variant="primary" type="submit">
                  Enregistrer
                </Button>
          </div>
       </Form>
    )
  }
}

const styles ={
  btnXs:{
    padding: ".25rem .4rem",
    fontSize: ".875rem",
    lineHeight: 0.5,
    borderRadius: ".2rem"
  }
}

export default CarInsuranceForm;
