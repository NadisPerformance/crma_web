import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import LoginLayout from '../../components/LoginLayout'
import {login_user} from '../../components/user/queries'
import { Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Form} from 'react-bootstrap'
import { setCookie} from "../../lib/session";
import { withFlashMessages } from 'next-flash-messages'
import Router from 'next/router'

class Login extends React.Component {
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
      <Mutation mutation={login_user} variables={{email:email,password: password}} >
            {loginMutation =>
        <React.Fragment>
          <p class="login-box-msg">Veuillez se connecter</p>

          <Form onSubmit={(event)=>{
                event.preventDefault();
                loginMutation().then((result)=>{
                  let data = result.data.login
                  if(data.statut_code == 1){
                    this.props.flashMessages.set('Vous êtes connecté.', 'success')
                    setCookie('token', data.token )
                    Router.push("/") ;
                  }
                  else alert("mot de passe incorrect")
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
            <div class="input-group mb-3">
              <Form.Control value={password} type="password"
               onChange={(event)=>this.setState({password:event.target.value})}
               placeholder="Mot de passe" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember" style={{fontSize: 12}} >
                    Se souvenir de moi
                  </label>
                </div>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
              </div>
            </div>
          </Form>

          <p class="mb-1">
            <Link href="/users/forgot-password">Mot de passe oublié ?</Link>
          </p>
      </React.Fragment>
    }
    </Mutation>
    </LoginLayout>
    )
  }
}

export default withFlashMessages(withData(Login))
