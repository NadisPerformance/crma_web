import React from 'react'
import Menu from './Menu'
import NavBar from './NavBar'
import Head from 'next/head'
import checkLoggedIn from '../lib/checkLoggedIn'
class AdminLayout extends React.Component {
  componentDidMount() {
        const {bodyClass} = this.props 
  }

  render(){ 
    const { user } = this.props
    //console.log(this.props) 
  	//return <div>Hello</div>
  	return  <React.Fragment>
  		<Head>
        <title>{this.props.title || "Compta Maroc"}</title>
        <link rel="stylesheet" href="/adminlte/plugins/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
        <link rel="stylesheet" href="/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        <link rel="stylesheet" href="/adminlte/plugins/jqvmap/jqvmap.min.css" />
        <link rel="stylesheet" href="/adminlte/dist/css/adminlte.min.css" />
        <link rel="stylesheet" href="/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" /> 
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
      </Head>
      <div className="hold-transition sidebar-mini layout-fixed">
        <NavBar />  
        <Menu />
        <div className="content-wrapper">
  	        {this.props.children} 
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

export default AdminLayout