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
    //console.log(pathname)
    return (
  <aside className="main-sidebar  elevation-4 sidebar-light-danger">
    <Link href="/" >
      <a className="brand-link" >
      <img src="/logo.png" alt="CRMA Logo" className="brand-image  elevation-3"
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
          <li className="nav-item has-treeview">
            <Link href="/" >
              <a className="nav-link" activeclassname="active" >
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Tableau de bord
              </p>
              </a>
            </Link>
          </li>
          <li className={pathname.startsWith("/bookings")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/bookings" >
              <a className="nav-link" activeclassname="active" >
              <i className="fas fa-history nav-icon"></i>
                <p>Réservations
                <i className="right fas fa-angle-left"></i>
                </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/bookings/list/" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fa fa-indent nav-icon"></i>
                  <p>Liste des réservations</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/bookings/add/">
                  <a  className="nav-link" activeclassname="active" >
                    <i className="fa fa-plus nav-icon"></i>
                    <p>Nouvelle réservation </p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/rentals")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/rentals" >
              <a className="nav-link" activeclassname="active" >
                <i className="nav-icon fas fa-copy"></i>
                <p>Locations
                <i className="right fas fa-angle-left"></i>
                </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/rentals/list/" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="nav-icon fas fa-copy"></i>
                  <p>Liste des locations</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rentals/add/">
                  <a  className="nav-link" activeclassname="active" >
                    <i className="fa fa-plus nav-icon"></i>
                    <p>Nouvelle location </p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/bills")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/bills" >
              <a className="nav-link" activeclassname="active">
              <i className="fa fa-file-invoice nav-icon"></i>
              <p>
                Factures
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/bills/list/" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fa fa-file-invoice nav-icon"></i>
                  <p>Liste des factures</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/bills/add/">
                  <a  className="nav-link" activeclassname="active" >
                    <i className="fa fa-plus nav-icon"></i>
                    <p>Nouvelle facture</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/clients")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/clients" >
              <a className="nav-link" activeclassname="active">
              <i className="nav-icon fas fa-users"></i>
              <p>
                Clients
                <i className="right fas fa-angle-left"></i>
              </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/customers/list" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fa fa-users nav-icon"></i>
                  <p>Clients</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/customers/add/">
                  <a  className="nav-link" activeclassname="active" >
                    <i className="fa fa-user-plus nav-icon"></i>
                    <p> Nouveau client</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/cars")?"nav-item has-treeview  menu-open":"nav-item has-treeview"} >
            <Link href="/cars" >
              <a className="nav-link" activeclassname="active" >
              <i className="fas fa-car nav-icon"></i>
                <p>
                  Véhicules
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="/cars/list">
                  <a  className="nav-link" activeclassname="active" >
                    <i className="fas fa-car nav-icon"></i>
                    <p> Liste</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cars/add" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fa fa-plus nav-icon"></i>
                  <p>Ajouter</p>
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname.startsWith("/users") ?"nav-item has-treeview  menu-open":"nav-item has-treeview"}>
            <Link href="/configuration" >
              <a  className="nav-link" activeclassname="active" >
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
                  <a className="nav-link" activeclassname="active" >
                    <i className="fa fa-users nav-icon"></i>
                    <p>Utilisateurs</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/users/list" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fas fa-map-marked-alt nav-icon"></i>
                    <p>Locaux</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/brands/list" >
                  <a className="nav-link" activeclassname="active" >
                  <i className="fab fa-bandcamp nav-icon"></i>
                    <p>Marques</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/users/list" >
                  <a className="nav-link" activeclassname="active" >
                    <i className="fas fa-percentage nav-icon"></i>
                    <p>Promotions</p>
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
