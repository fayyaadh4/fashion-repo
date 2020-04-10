import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Jumbotron
} from "react-bootstrap";
import ViewButton from "./ViewButton";
import MatButton from "@material-ui/core/Button";

//displays either list or thumbnail view
export default function AdminProducts(props) {
  //console.log(props.isInListMode);
  if (props.isInListMode === false) {
    //console.log(props.items)
    return (
      <div>
        <Container fluid>
          <h2 className="featuresHeading">Products</h2>
          <ViewButton
            changeTo="list view"
            changeViewMode={props.changeViewMode}
          ></ViewButton>
          <ListGroup variant="flush">
            <Row>
              {props.items.map(item => (
                <ListGroup.Item
                  key={item._id}
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "30px"
                  }}
                >
                  <Col xs md="6">
                    <Card style={{ width: "20rem", height: "680px" }}>
                      <Card.Img
                        variant="top"
                        height="450"
                        src={`http://localhost:8000/${item.imgSrc}`}
                        alt={item.imgDetails}
                      />
                      <Card.Body>
                        <Card.Title>Details:</Card.Title>
                        <Card.Text>{item.imgDetails}</Card.Text>
                      </Card.Body>
                      <div className="outer">
                        <MatButton
                          color="primary"
                          className="prodButton"
                          type="submit"
                          onClick={() => props.handleEdit(item._id)}
                        >
                          Edit
                        </MatButton>
                        <MatButton
                          color="secondary"
                          className="prodButton"
                          type="submit"
                          onClick={() => props.handleRemove(item._id)}
                        >
                          Remove
                        </MatButton>
                      </div>
                    </Card>
                  </Col>
                </ListGroup.Item>
              ))}
            </Row>
          </ListGroup>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container fluid>
          <h2 className="featuresHeading">Products</h2>
          <ViewButton
            changeTo="thumbnail view"
            changeViewMode={props.changeViewMode}
          ></ViewButton>
          <ListGroup variant="flush">
            {props.items.map(item => (
              <ListGroup.Item
                key={item._id}
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "30px"
                }}
              >
                <Row>
                  <Jumbotron
                    className="jumbotron"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Row>
                      <Col>
                        <Image
                          src={`http://localhost:8000/${item.imgSrc}`}
                          alt={item.imgDetails}
                          style={{
                            width: "20rem",
                            height: "450px",
                            float: "left",
                            margin: "3px"
                          }}
                          thumbnail
                          fluid
                        ></Image>
                        <div className="listDetails">
                          <h1 className="detailsHeading">Details:</h1>
                          <h2 className="detailsInfo">{item.imgDetails}</h2>
                        </div>
                        <div className="listButtons">
                          <Row>
                            <MatButton
                              variant="contained"
                              className="prodListButton"
                              type="submit"
                              onClick={() => props.handleEdit(item._id)}
                            >
                              Edit
                            </MatButton>
                            <MatButton
                              variant="contained"
                              color="secondary"
                              className="prodListButton"
                              type="submit"
                              onClick={() => props.handleRemove(item._id)}
                            >
                              Remove
                            </MatButton>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Jumbotron>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}
