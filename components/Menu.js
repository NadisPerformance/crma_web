import React from 'react'
import Link  from "next/link";

class Menu extends React.Component{
  constructor (props) {
    super(props)
    this.state ={
      expanded:true,
      user: {
        nom:"belabed",
        prenom:"mohammed"
      } // JSON.parse(localStorage.getItem('user'))
    }
  }

  render () {
    const pathname = "/"
    const {user} = this.state
    console.log(pathname)
    return (
  <aside className="main-sidebar  elevation-4 sidebar-light-danger">
    <Link href="/" >
      <a className="brand-link" >
      <img src="/logo.png" alt="AdminLTE Logo" className="brand-image  elevation-3"
           style={{opacity: "1", width:"200px"}} />
      <span className="brand-text font-weight-light">&nbsp;</span>
      </a>
    </Link>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/adminlte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">{user.nom +" "+user.prenom}</a>
        </div>
      </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item has-treeview">
            <Link href="/" >
              <a className="nav-link" activeClassName="active" >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Tableau de bord
              </p>
              </a>
            </Link>
          </li>
          <li className={pathname.startsWith("/detections")?"nav-item has-treeview  menu-open":"nav-item has-treeview"}>
            <Link href="/detections">
              <a  className="nav-link" activeClassName="active">
              <i className="nav-icon fa fa-eye"></i>
              <p>
                Détections
              </p>
              </a>
            </Link>
          </li>
          <li className={pathname.startsWith("/rapports")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/rapports" >
              <a className="nav-link" activeClassName="active">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Factures
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/factures/in/" >
                  <a className="nav-link" activeClassName="active" >
                  <i className="fa fa-indent nav-icon"></i>
                  <p>Factures entrantes</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/factures/out/">
                  <a  className="nav-link" activeClassName="active" >
                    <i className="fa fa-outdent nav-icon"></i>
                    <p>Factures sortantes</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/factures/add/">
                  <a  className="nav-link" activeClassName="active" >
                    <i className="fa fa-plus nav-icon"></i>
                    <p>Nouvelle facture</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/clients")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/clients" >
              <a className="nav-link" activeClassName="active">
              <i className="nav-icon fas fa-users"></i>
              <p>
                Clients
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/clients/" >
                  <a className="nav-link" activeClassName="active" >
                  <i className="fa fa-users nav-icon"></i>
                  <p>Clients</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/clients/add/">
                  <a  className="nav-link" activeClassName="active" >
                    <i className="fa fa-user-plus nav-icon"></i>
                    <p> Nouveau client</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/fournisseurs")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/fournisseurs" >
              <a className="nav-link" activeClassName="active">
              <i className="nav-icon fas fa-users"></i>
              <p>
                Fournisseurs
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/fournisseurs/" >
                  <a className="nav-link" activeClassName="active" >
                  <i className="fa fa-users nav-icon"></i>
                  <p>Fournisseurs</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/fournisseurs/add/">
                  <a  className="nav-link" activeClassName="active" >
                    <i className="fa fa-user-plus nav-icon"></i>
                    <p> Nouveau fournisseur</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/cameras") || pathname.startsWith("/arches")?"nav-item has-treeview  menu-open":"nav-item has-treeview"}>
            <Link href="/configuration" >
              <a  className="nav-link" activeClassName="active" >
              <i className="nav-icon fa fa-cogs"></i>
              <p>
                Configuration
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/users/list" >
                  <a className="nav-link" activeClassName="active" >
                    <i className="fa fa-users nav-icon"></i>
                    <p>Utilisateurs</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
    )
  }
}

export default Menu;
