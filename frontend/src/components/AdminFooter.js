import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

//admin footer returning admin to web site
export default function AdminFooter() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mainFooter">
        <Navbar.Brand>EVOLV|INC</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link exact="true" href="/">
            <ArrowBackIcon></ArrowBackIcon>Return to site
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
