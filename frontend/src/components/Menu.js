import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//main menu for web pages
export default function Menu() {
  return (
    <div>
      <Navbar bg="light" id="mainNav">
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
          <NavLink exact to="/" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink exact to="/about" activeClassName="activeLink">
            About
          </NavLink>
          <NavLink exact to="/products" activeClassName="activeLink">
            Products
          </NavLink>
          <NavLink exact to="/contact" activeClassName="activeLink">
            Contact
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
