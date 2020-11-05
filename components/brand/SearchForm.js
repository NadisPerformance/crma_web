import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      brand:{
        name:"",
      }
    }
  }
  setName(value){
    this.state.brand.name = value
    this.setState({brand:this.state.brand})
  }
  render () {
    const {
      brand
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/brands/list?name="+brand.name);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <Form.Group controlId="formBasicName">
                    <Form.Control value={brand.name} type="text" onChange={(event)=>this.setName(event.target.value)} placeholder="Nom ..." />
                  </Form.Group>
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
