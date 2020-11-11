import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import CustomerSelectInput  from '../customer/SelectInput'
import PaymentMethodSelectInput  from '../payment_method/SelectInput'
function getDiffDays(begin, end){
  begin = moment(begin)
  end = moment(end)
  var duration = moment.duration(end.diff(begin));
  var days = duration.asDays();
  return days
}

class PaymentForm extends React.Component{
  constructor (props) {
    super(props)
    let{rental} = props
    var total_ttc = rental.car.price * getDiffDays(rental.date_begin, rental.date_end)
    var total_ht = total_ttc * 0.8
    this.state = {
      bill:{
        rentalId: rental.id *1,
        customerId:rental.customer.id*1,
        paymentMethodId:0,
        total_ttc:total_ttc,
        total_ht:total_ht
      },
      restant: total_ttc - rental.montant_avance

    }
    props.onChange(this.state.bill)

  }
  componentDidMount(){
  }
  setPaymentMethodId(value){
    this.setState(state => (state.bill.paymentMethodId = value *1, state))
    this.onChange();
  }
  setTotalHT(value){
    this.setState(state => (state.bill.total_ht = value *1, state))
    this.onChange();
  }
  setTotalTTC(value){
    let {rental} = this.props
    this.setState(state => (state.bill.total_ttc = value *1, state))
    this.setState({restant: value-rental.montant_avance *1 })
    this.onChange();
  }
  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.bill)
  }

  render () {
    const {bill} = this.state
    const {rental} = this.props
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
            <Col className="">
              <table className="table" style={{minHeight:"200px"}}>
                <tr>
                    <th style={{width:"50%"}} ><Form.Label>Prix de location journalier:</Form.Label></th>
                    <td>{rental.car.price} Dhs</td>
                </tr>
                <tr>
                    <th style={{width:"50%"}} ><Form.Label>Nombre de jours:</Form.Label></th>
                    <td>{getDiffDays(rental.date_begin, rental.date_end)} Jour(s)</td>
                </tr>
                <tr>
                    <th style={{width:"50%"}} ><Form.Label>Total HT (Dhs):</Form.Label></th>
                    <td><Form.Control value={bill.total_ht} type="text" onChange={(event)=>this.setTotalHT(event.target.value)} placeholder="Total HT" /></td>
                </tr>
                      <tr>
                          <th style={{width:"50%"}} ><Form.Label>Total TTC (Dhs):</Form.Label></th>
                          <td><Form.Control value={bill.total_ttc} type="text" onChange={(event)=>this.setTotalTTC(event.target.value)} placeholder="Total TTC" /></td>
                      </tr>
                      <tr>
                          <th style={{width:"50%"}} ><Form.Label>Avance:</Form.Label></th>
                          <td> {rental.montant_avance} Dhs</td>
                      </tr>
                      <tr>
                          <th style={{width:"50%"}} ><Form.Label>Restant à payer:</Form.Label></th>
                          <td> { this.state.restant} Dhs</td>
                      </tr>
                      <tr>
                          <th style={{width:"50%"}} ><Form.Label>Méthode de paiement:</Form.Label></th>
                          <td><PaymentMethodSelectInput  selectedId={bill.paymentMethodId}  onChange={(selectedId)=>this.setPaymentMethodId(selectedId)} /></td>
                      </tr>
              </table>
            </Col>
          <div className="text-right" style={{margin:10}}>
                <Button   variant="primary" type="submit">
                  Valider le paiement
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

export default PaymentForm;
