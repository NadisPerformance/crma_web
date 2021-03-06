import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import BrandSelectInput from '../brand/SelectInput'
import CategorySelectInput from '../category/SelectInput'
import ColorSelectInput from '../color/SelectInput'
import StatusSelectInput from '../status/SelectInput'

class CarForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      car:{
        brandId:0,
        model:"",
        model_date:"",
        categoryId:0,
        price:"",
        colorId:0,
        plate_number:"",
        chassis_number:"",

        statusId:0,
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
    this.state.car.brandId = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }
  setModel(value){
    this.state.car.model = value
    this.setState({car:this.state.car})
    this.onChange();
  }
  setModel_date(value){
    this.state.car.model_date = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }
  setCategoryId(value){
    this.state.car.categoryId = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }
  setPrice(value){
    this.state.car.price = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }

  setColorId(value){
    this.state.car.colorId = value*1
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
    this.state.car.availability = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }
  setStatusId(value){
    this.state.car.statusId = value*1
    this.setState({car:this.state.car})
    this.onChange();
  }
  setPictureFile(file){
     this.state.car.picture_file = file
     this.setState({car:this.state.car})
     this.onChange() ;
  }
  setGreyCardFile(file){
    this.state.car.scanned_grey_card_file = file
    this.setState({car:this.state.car})
    this.onChange() ;
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
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Photo du véhicule:</Form.Label>
              <Form.Control type="file"
                onChange={({target: {validity,files: [file],},})=>this.setPictureFile(file)}
                 />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Carte grise scannée:</Form.Label>
              <Form.Control type="file"
                onChange={({target: {validity,files: [file],},})=>this.setGreyCardFile(file)}
                 />
          </Form.Group>
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
            <StatusSelectInput  selectedId={car.statusId}  onChange={(selectedId)=>this.setStatusId(selectedId)} />
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
