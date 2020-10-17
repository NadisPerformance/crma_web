import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import LoginLayout from '../../components/LoginLayout'
import {login_user} from '../../components/user/queries'
import { Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Form} from 'react-bootstrap'

class ChangePassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id:5,
      password:"",
      password_confirm:"",
      recover_code:"ggttrr"
    }
  }
  render() {
    const {
      id,
      password,
      password_confirm,
      recover_code
    } = this.state
    return (
      <LoginLayout>
      <Mutation mutation={login_user} variables={{id:id,new_password: password,recover_code:recover_code}} >
            {changePasswordMutation =>
        <React.Fragment>
          <p class="login-box-msg">Veuillez saisir un nouveau mot de passe</p>

          <Form onSubmit={(event)=>{
                event.preventDefault();
                changePasswordMutation().then((result)=>{
                  let data = result.data.recoverPassword
                  if(data.statut_code == 1){
                    alert("vous etes connecté")
                    //localStorage.setItem('user', JSON.stringify(data.user) )
                    //localStorage.setItem('token', data.token )
                    //window.flash('L\'utilisateur a bien été modifié.', 'success')
                    window.location ="/" ;
                  }
                  else alert("mot de passe incorrect")
                })
              }} >
            <div class="input-group mb-3">
              <Form.Control value={password} type="password"
               onChange={(event)=>this.setState({password:event.target.value})}
               placeholder="Nouveau mot de passe" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <Form.Control value={password_confirm} type="password"
               onChange={(event)=>this.setState({password_confirm:event.target.value})}
               placeholder="Confirmer le mot de passe" />
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
                <button type="submit" class="btn btn-primary btn-block">Valider</button>
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

export default withData(ChangePassword)
