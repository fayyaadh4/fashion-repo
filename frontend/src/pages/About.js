import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import AboutCover from "../images/Evolv logo cover.jpg";
import { Image, Jumbotron } from "react-bootstrap";

//about page
export default function About() {
  return (
    <div>
      <Menu></Menu>
      <div
        style={{
          textAlign: "center",
          textStyle: "bond",
          fontFamily: "cursive"
        }}
      >
        <h2 className="featuresHeading">About</h2>
        <Jumbotron style={{ backgroundColor: "ivory" }}>
          <p>
            EVOLV|INC is a <b>Cape Town</b> based <b>fashion boutique</b>{" "}
            specialising in the <b>trendiest</b>, most <b>stylish</b>{" "}
            fashionable clothing.
          </p>{" "}
          <p>
            {" "}
            At EVOLV|INC, lots of emphasis is focused on the design of{" "}
            <b>modest</b> yet <b>versatile</b> clothing items which are best
            suited for a huge variety of occassions. This creative design
            coupled with the <b>affordable price</b> rates makes EVOLV|INC truly
            unique.
          </p>
          <p>
            Our brand looks to provide customers with the latest in{" "}
            <b>high-end fashionable</b> outfits, <b>handmade</b> to suit each
            and everyone's individual needs.
          </p>
          <h5>
            In an ever-growing industry, help us to help you keep with the
            latest trends.
          </h5>
        </Jumbotron>
      </div>
      <Image
        src={AboutCover}
        alt="aboutCover"
        width="370"
        height="396"
        className="center"
        rounded
        style={{ marginTop: "20px" }}
      ></Image>
      <Footer></Footer>
    </div>
  );
}
