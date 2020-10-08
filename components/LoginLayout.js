import React from 'react'
import Head from 'next/head'

class LoginLayout extends React.Component {
  componentDidMount() {
        const {bodyClass} = this.props
        //document.querySelector("body").classList.add("sidebar-mini")
        //document.querySelector("body").classList.add(bodyClass || "login-page")
  }
  render(){
  	//return <div>Hello</div>
  	return  <React.Fragment>
  		<Head>
  		  <title>Se connecter</title>
  		  <link rel="stylesheet" href="/adminlte/plugins/fontawesome-free/css/all.min.css" />
		  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
		  <link rel="stylesheet" href="/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
		  <link rel="stylesheet" href="/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
		  <link rel="stylesheet" href="/adminlte/plugins/jqvmap/jqvmap.min.css" />
		  <link rel="stylesheet" href="/adminlte/dist/css/adminlte.min.css" />
		  <link rel="stylesheet" href="/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" /> 
		  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  		</Head>
  		<div className="sidebar-mini login-page" >
	  		<div className="login-box">
		      <div className="login-logo">
		        <a href="/"><img src="/logo.png" /></a>
		      </div> 
		      <div className="card">
		        <div className="card-body login-card-body">
		        {this.props.children}
		        </div>
		      </div>
	      </div>
	    </div>
      	<script src="/adminlte/plugins/jquery/jquery.min.js"></script>
      	<script src="/adminlte/plugins/jquery-ui/jquery-ui.min.js"></script>
    	
  		<script src="/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script> 
  		<script src="/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>

  		<script src="/adminlte/dist/js/adminlte.js"></script> 
      </React.Fragment> 
   }
}

export default LoginLayout