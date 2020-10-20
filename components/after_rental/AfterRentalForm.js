import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import MultiUpload from '../album/MultiUpload'
class AfterRentalForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      after_rental:{
        rentalId:0,
        albumId:0,
        comment:"",
        kilometrage:0,
        niveau_carburant:0
      }
    }
    this.state.album = props.album
    this.state.after_rental = props.after_rental
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount(){
    this.onChange()
  }
  setRentalId(value){
    this.state.after_rental.rentalId = value*1
    this.setState({after_rental:this.state.after_rental})
    this.onChange();
  }

  setKilometrage(value){
    this.state.after_rental.kilometrage = value *1
    this.setState({after_rental:this.state.after_rental})
    this.onChange();
  }
  setNiveauCarburant(value){
    this.state.after_rental.niveau_carburant = value *1
    this.setState({after_rental:this.state.after_rental})
    this.onChange();
  }

  setComment(value){
    this.state.after_rental.comment = value
    this.setState({after_rental:this.state.after_rental})
    this.onChange();
  }
  setAlbumId(value){
    this.state.after_rental.albumId = value *1
    this.setState({after_rental:this.state.after_rental})
    this.onChange()
  }
  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.after_rental)
  }
  render () {
    const {after_rental, album} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
       <Row className="col-sm-12">
         <Col className="col-sm-6 table-responsive">
          <Form.Group controlId="formBasicEmail">
             <Form.Label>Kilométrage du véhicule:</Form.Label>
             <Form.Control value={after_rental.kilometrage} type="text" onChange={(event)=>this.setKilometrage(event.target.value)} placeholder="Kilométrage " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Niveau du carburant:</Form.Label>
            <Form.Control value={after_rental.niveau_carburant} type="text" onChange={(event)=>this.setNiveauCarburant(event.target.value)} placeholder="Niveau du carburant " />
          </Form.Group>
          <Form.Group>
              <Form.Label>Commentaire</Form.Label><br/>
            <Form.Control as="textarea"  value={after_rental.comment} onChange={(event)=>this.setComment(event.target.value)} placeholder="Commentaire" />
          </Form.Group>
         </Col>
          <Col className="col-sm-6 table-responsive">
              <MultiUpload onChange={(value)=>this.setAlbumId(value)} album={album} />
          </Col>
        </Row>
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

export default AfterRentalForm;
