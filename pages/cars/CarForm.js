import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import BrandSelectInput from '../brands/SelectInput'
import CategorySelectInput from '../categories/SelectInput'
import ColorSelectInput from '../colors/SelectInput'

class CarForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      car:{
        brandId:"",
        model:"",
        model_date:"",
        categoryId:"",
        price:"",
        colorId:"",
        plate_number:"",
        chassis_number:"",
        availability:"",
        statusId:"",
      }
    }
  }
  componentDidMount(){
    const {car} = this.props
    if(car){
      this.state.car = car
    }
    this.onChange()
  }
  setBrandId(value){
    this.state.car.brandId = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setModel(value){
    this.state.car.model = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setModel_date(value){
    this.state.car.model_date = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setCategoryId(value){
    this.state.car.categoryId = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setPrice(value){
    this.state.car.price = value
    this.setState({car:this.state.car})
    this.onChange();
  }

  setColorId(value){
    this.state.car.colorId = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setPlate_number(value){
    this.state.car.plate_number = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setChassis_number(value){
    this.state.car.chassis_number = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setAvailability(value){
    this.state.car.availability = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setStatusId(value){
    this.state.car.statusId = value
    this.setState({car:this.state.car})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.car)
  }
  render () {
    const {car, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicBrandId">
            <Form.Label>Marque:</Form.Label>
            <BrandSelectInput selectedId={car.brandId} onChange={(selectedId)=>this.setBrandId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Modèle:</Form.Label>
            <Form.Control value={car.model} type="text" onChange={(event)=>this.setModel(event.target.value)} placeholder="Modéle" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date du modéle:</Form.Label>
            <Form.Control value={car.model_date} type="text" onChange={(event)=>this.setModel_date(event.target.value)} placeholder="Date du modéle" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Catégorie:</Form.Label>
            <CategorySelectInput  selectedId={car.categoryId}  onChange={(selectedId)=>this.setCategoryId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Prix de location:</Form.Label>
            <Form.Control value={car.price} type="text" onChange={(event)=>this.setPrice(event.target.value)} placeholder="Prix journal" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Couleur:</Form.Label>
            <ColorSelectInput  selectedId={car.colorId}  onChange={(selectedId)=>this.setColorId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Immatriculation:</Form.Label>
            <Form.Control value={car.plate_number} type="text" onChange={(event)=>this.setPlate_number(event.target.value)} placeholder="Immatriculation" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Numéro de chassis:</Form.Label>
            <Form.Control value={car.chassis_number} type="text" onChange={(event)=>this.setChassis_number(event.target.value)} placeholder="Numéro de chassis" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Status:</Form.Label>
            <Form.Control value={car.statusId} type="text" onChange={(event)=>this.setStatusId(event.target.value)} placeholder="Status" />
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

export default CarForm;
