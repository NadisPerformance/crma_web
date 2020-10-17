import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import LoginLayout from '../../components/LoginLayout'
import {signup_user} from '../../components/user/queries'
import { Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Form} from 'react-bootstrap'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nom:"",
      prenom:"",
      email:"",
      password:""
    }
  }
  render() {
    const {
      nom,
      prenom,
      email,
      password
    } = this.state
    return (
      <LoginLayout>
      <Mutation mutation={signup_user} variables={{nom:nom,prenom:prenom,email:email,password: password}} >
            {signupMutation =>
        <React.Fragment>
          <p class="login-box-msg">Inscription</p>

          <Form onSubmit={(event)=>{
                event.preventDefault();
                signupMutation().then((result)=>{
                  let data = result.data.signup
                  if(data.statut_code == 1){
                    alert("bien inscris")
                    //localStorage.setItem('user', JSON.stringify(data.user) )
                    //localStorage.setItem('token', data.token )
                    //window.flash('L\'utilisateur a bien été modifié.', 'success')
                    window.location ="/" ;
                  }
                  else alert("Veuillez remplir tous les champs!")
                })
              }} >
              <div class="input-group mb-3">
                <Form.Control type="nom"
                   value={nom}
                   onChange={(event)=>this.setState({nom:event.target.value})}
                   placeholder="nom" />
                <div class="input-group-append">
                  <div class="input-group-text">
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <Form.Control type="prenom"
                   value={nom}
                   onChange={(event)=>this.setState({nom:event.target.value})}
                   placeholder="prénom" />
                <div class="input-group-append">
                  <div class="input-group-text">
                  </div>
                </div>
              </div>
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
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
              </div>
            </div>
          </Form>

          <p class="mb-1">
            <Link href="/users/login">Avez-vous déja un compte ?</Link>
          </p>
      </React.Fragment>
    }
    </Mutation>
    </LoginLayout>
    )
  }
}

export default withData(Signup)
