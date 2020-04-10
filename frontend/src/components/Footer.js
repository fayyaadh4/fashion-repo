import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { SocialIcon } from "react-social-icons";

//footer returning user to top of page and containing link to instagram pae
export default function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mainFooter">
        <Navbar.Brand>EVOLV|INC</Navbar.Brand>
        <Nav className="mr-auto">
          <a href="#mainNav" style={{ textDecoration: "none" }}>
            <ArrowUpwardIcon></ArrowUpwardIcon>Top Of Page
          </a>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Brand>Find us at: </Navbar.Brand>
          <SocialIcon
            url="https://www.instagram.com/evolv_byfarzaana/"
            target="_blank"
          ></SocialIcon>
        </Nav>
      </Navbar>
    </div>
  );
}
