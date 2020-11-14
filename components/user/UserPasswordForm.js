import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import RoleSelectInput  from '../role/SelectInput'
class UserForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      user:{
        password:"",
      },
      show_password:false
    }
  }
  componentDidMount(){
    const {user} = this.props
    if(user){
      delete user.role ;
      //this.state.user = user
    }
    this.onChange()
  }

  setPassword(value){
    this.state.user.password = value
    this.setState({user:this.state.user})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.user)
  }
  render () {
    const {user, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Mot de passe:</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control value={user.password} type={show_password?"text":"password"} onChange={(event)=>this.setPassword(event.target.value)} placeholder="Mot de passe" />
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <Button
                  className="btn btn-primary btn-xs"
                  style={styles.btnXs}
                  onClick={()=>this.setState({show_password:!show_password})}
                  >
                  {!show_password &&
                  <i className="fa fa-eye"></i>
                   }
                  {show_password &&
                  <i className="fa fa-eye-slash"></i>
                   }
                </Button>
              </InputGroup.Text>
            </InputGroup.Prepend>
            </InputGroup>
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

export default UserForm;
