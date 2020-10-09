import React from 'react'
import { withRouter } from 'next/router';
import {Button} from 'react-bootstrap'
import Link from 'next/link'

class NavBar extends React.Component{
  constructor (props) {
    super(props) 
    this.state ={
    	expanded:true,
      user:{
        nom:"BELABED",
        prenom:"Mohammed",
        email:"lazmlmlaz"
      } // JSON.parse(localStorage.getItem('user'))
    }
  } 
  componentDidMount(){
    //console.log(localStorage.getItem('user'))
    //this.state.user = 
    //alert("hello")
  } 
  _logout(){
   // localStorage.removeItem('token')
    window.location ="/login" ;
  }
  render () {
    const {user} = this.state
    if(!user)
      return null
    return (  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li> 
    </ul> 
    <ul className="navbar-nav ml-auto"> 
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
           
        </div>
      </li> 
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell"></i>
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        </div>
      </li> 
      <li className="nav-item dropdown user-menu">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src="https://cloud.mabroka.ma/50_20200313_236671_avatar.png" className="user-image img-circle elevation-2" alt="BELABED Mohammed" />
          <span className="d-none d-md-inline">{user.nom +" "+user.prenom}</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
           
          <li className="user-header bg-primary">
            <img src="https://cloud.mabroka.ma/50_20200313_236671_avatar.png" className="img-circle elevation-2" alt="BELABED Mohammed" />

            <p>
              {user.nom +" "+user.prenom} - Administrateur 
            </p>
          </li>  
          <li className="user-footer">
            <Link href="/my-profile" >
              <a className="btn btn-default btn-flat" >Mon profil</a>
            </Link>
            <a onClick={()=>this._logout()} className="btn btn-default btn-flat float-right" >Se déconnecter</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav> 
    )
  }
}

export default NavBar;
