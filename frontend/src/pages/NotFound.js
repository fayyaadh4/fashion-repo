import React from "react";
import Menu from "../components/Menu";
import { Jumbotron } from "react-bootstrap";
import Footer from "../components/Footer";

//not found page
export default function NotFound() {
  return (
    <div>
      <Menu></Menu>
      <h1>Not found</h1>
      <Jumbotron id="notFoundSpace"></Jumbotron>
      <Footer></Footer>
    </div>
  );
}
