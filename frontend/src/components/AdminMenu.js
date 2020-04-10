import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

//menu for logged in admin users
export default class AdminMenu extends React.Component {

    handleLogout = () => {
      fetch('/api/logout')
      .then(console.log('logged out'))
    }

  render() {
  return (
    <div>
      <Navbar bg="light" className="mainNav">
        <div style={{ textAlign: "center" }}>
          <Navbar.Brand>
            <h4>
              <b>EVOLV|INC</b>
            </h4>
            <p style={{ fontSize: "0.7em" }}>
              Stylish<span>&#8226;</span>Understated<span>&#8226;</span>Trendy
            </p>
          </Navbar.Brand>
        </div>
        <Nav className="mainMenu ml-auto">
          <NavLink exact to="/admin/home" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink exact to="/admin/products" activeClassName="activeLink">
            Products
          </NavLink>
          <NavLink exact to="/admin/register" activeClassName="activeLink">
            Register
          </NavLink>
          <NavLink
            exact
            to="/admin"
            activeClassName="activeLink"
            onClick={this.handleLogout}
          >
            Sign out
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );

  }
}
