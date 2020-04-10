import React from "react";
import Menu from "../components/Menu";
import { Jumbotron } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Footer from "../components/Footer";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
import MyLocationIcon from "@material-ui/icons/MyLocation";

//contacts page
export default function Contact() {
  return (
    <div>
      <Menu></Menu>
      <h2 className="featuresHeading">Contact</h2>
      <Jumbotron style={{ backgroundColor: "ivory" }}>
        <p>
          Cellphone number: <a href="tel:0744466">0744466</a> (Call
          <CallIcon></CallIcon> or pop us a message over on whatsapp
          <ChatIcon></ChatIcon>)
        </p>
        <p>
          Email address:{" "}
          <a href="mailto:something@gmail.com">something@gmail.com</a>
          <EmailIcon></EmailIcon>
        </p>
        <p>
          Location: Cape Town, South Africa<MyLocationIcon></MyLocationIcon>
        </p>
        <div style={{ textAlign: "center" }}>
          <h5>Or visit us on our Instagram page:</h5>
          <SocialIcon
            url="https://www.instagram.com/evolv_byfarzaana/"
            target="_blank"
          ></SocialIcon>
        </div>
      </Jumbotron>
      <Jumbotron id="fillSpace"></Jumbotron>
      <Footer id="footer"></Footer>
    </div>
  );
}
