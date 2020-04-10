import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
//import EvolvLogo from '../images/Evolv logo.jpg';
import CroppedLogo from "../images/Evolv inc cropped logo.jpg";
import Cover from "../images/Evolv cover.jpg";
import { Image, Jumbotron } from "react-bootstrap";

//home page
export default function Home() {
  return (
    <div>
      <Menu></Menu>
      <Image
        src={CroppedLogo}
        alt="logo"
        width="200"
        height="300"
        rounded
        className="center"
      ></Image>
      <br></br>
      <div
        style={{
          textAlign: "center",
          textStyle: "bond",
          fontFamily: "cursive"
        }}
      >
        <h2 className="featuresHeading">Features</h2>
        <Jumbotron style={{ backgroundColor: "ivory" }}>
          <p>Creating versatile pieces for all occassions</p>
          <p>Handmade pieces that aren't limited to one occassion.</p>
          <p>Affordable high end modest fashion.</p>
        </Jumbotron>
      </div>
      <br></br>
      <Image src={Cover} alt="home cover" rounded className="center"></Image>
      <Footer></Footer>
    </div>
  );
}
