import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import CustomerSelectInput  from '../customer/SelectInput'
import CarSelectInput  from '../car/SelectInput'

class RentalForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      rental:{
        carId:0,
        customerId:0,
        second_driverId:0,
        date_begin:"",
        date_end:"",
        montant_avance:0
      }
    }
  }
  componentDidMount(){
    const {rental} = this.props
    if(rental){
      this.state.rental = rental
    }
    this.onChange()
  }
  setCarId(value){
    this.setState(state => (state.rental.carId = value *1, state))
    this.onChange();
  }

  setCustomerId(value){
    this.setState(state => (state.rental.customerId = value *1, state))
    this.onChange();
  }
  setSecondDriverId(value){
    this.setState(state => (state.rental.second_driverId = value *1, state))
    this.onChange();
  }
  setDateBegin(value){
    this.state.rental.date_begin = value
    this.setState({rental:this.state.rental})
    this.onChange();
  }

  setDateEnd(value){
    this.state.rental.date_end = value
    this.setState({rental:this.state.rental})
    this.onChange();
  }
  setMontantAvance(value){
    this.state.rental.montant_avance = value *1
    this.setState({rental:this.state.rental})
    this.onChange();
  }
  setContractFile(file){
    this.state.rental.scanned_contract_file = file
    this.setState({rental:this.state.rental})
    this.onChange() ;
  }
  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.rental)
  }
  render () {
    const {rental, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Client:</Form.Label>
            <CustomerSelectInput  selectedId={rental.customerId}  onChange={(selectedId)=>this.setCustomerId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Véhicule:</Form.Label>
            <CarSelectInput  selectedId={rental.carId}  onChange={(selectedId)=>this.setCarId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Deuxiéme conducteur:</Form.Label>
            <CustomerSelectInput  selectedId={rental.second_driverId}  onChange={(selectedId)=>this.setSecondDriverId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de début:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(rental.date_begin).toDate())}
              onChange={date => this.setDateBegin(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(rental.date_end).toDate())}
              onChange={date => this.setDateEnd(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
              minDate={rental.date_begin}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Montant avancé:</Form.Label>
            <Form.Control value={rental.montant_avance} type="text" onChange={(event)=>this.setMontantAvance(event.target.value)} placeholder="Montant avancé" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Importé le contrat de location:</Form.Label>
            <Form.Control type="file"
              onChange={({target: {validity,files: [file],},})=>this.setContractFile(file)}
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

export default RentalForm;
