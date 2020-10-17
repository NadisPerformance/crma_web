import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import LoginLayout from '../../components/LoginLayout'
import {forgotPassword_user} from '../../components/user/queries'
import { Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Form} from 'react-bootstrap'

class ForgotPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email:"",
      password:""
    }
  }
  render() {
    const {
      email,
      password
    } = this.state
    return (
      <LoginLayout>
      <Mutation mutation={forgotPassword_user} variables={{email:email}} >
            {forgotPasswordMutation =>
        <React.Fragment>
          <p class="login-box-msg">Veuillez saisir votre adresse email</p>

          <Form onSubmit={(event)=>{
                event.preventDefault();
                forgotPasswordMutation().then((result)=>{
                  let data = result.data.login
                  if(data.statut_code == 1){
                    alert("merci de consulter votre adresse email")
                    //localStorage.setItem('user', JSON.stringify(data.user) )
                    //localStorage.setItem('token', data.token )
                    //window.flash('L\'utilisateur a bien été modifié.', 'success')
                    window.location ="/" ;
                  }
                  else alert("Email obligatoire!")
                })
              }} >
            <div class="input-group mb-3">
              <Form.Control type="email"
                 value={email}
                 onChange={(event)=>this.setState({email:event.target.value})}
                 placeholder="Addresse email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
              <p class="mb-1">
                <Link href="/users/login">Se connecter</Link>
              </p>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block">Confirmer</button>
              </div>
            </div>
          </Form>
      </React.Fragment>
    }
    </Mutation>
    </LoginLayout>
    )
  }
}

export default withData(ForgotPassword)
