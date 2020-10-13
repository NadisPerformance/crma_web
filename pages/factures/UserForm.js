import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import RoleSelectInput  from '../roles/SelectInput'
class UserForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      user:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phone:"",
        roleId:1
      },
      show_password:false
    }
  }
  componentDidMount(){
    const {user} = this.props
    if(user){
      delete user.role ;
      this.state.user = user
    }
    this.onChange()
  }
  setLastname(value){
    this.state.user.lastname = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setFirstname(value){
    this.state.user.firstname = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setGender(value){
    this.state.user.gender = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setCNI(value){
    this.state.user.cni = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setAddress(value){
    this.state.user.address = value
    this.setState({user:this.state.user})
    this.onChange();
  }

  setEmail(value){
    this.state.user.email = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setPhone(value){
    this.state.user.phone = value
    this.setState({user:this.state.user})
    this.onChange();
  }
  setRoleId(value){
    this.setState(state => (state.user.roleId = value *1, state))
    this.onChange();
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
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={user.lastname} type="text" onChange={(event)=>this.setLastname(event.target.value)} placeholder="Nom" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Prénom:</Form.Label>
            <Form.Control value={user.firstname} type="text" onChange={(event)=>this.setFirstname(event.target.value)} placeholder="Prénom" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Civilisation:</Form.Label>
            <Form.Control value={user.gender} type="text" onChange={(event)=>this.setGender(event.target.value)} placeholder="Civilisation" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CNI:</Form.Label>
            <Form.Control value={user.cni} type="text" onChange={(event)=>this.setCNI(event.target.value)} placeholder="CNI" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse:</Form.Label>
            <Form.Control value={user.address} type="text" onChange={(event)=>this.setAddress(event.target.value)} placeholder="Adresse " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control value={user.email} type="text" onChange={(event)=>this.setEmail(event.target.value)} placeholder="Adresse email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Téléphone:</Form.Label>
            <Form.Control value={user.phone} type="text" onChange={(event)=>this.setPhone(event.target.value)} placeholder="Téléphone" />
          </Form.Group>
          <Form.Group controlId="formBasicRoleId">
            <Form.Label>Rôle:</Form.Label>
            <RoleSelectInput  selectedId={user.roleId}  onChange={(selectedId)=>this.setRoleId(selectedId)} />
          </Form.Group>
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
