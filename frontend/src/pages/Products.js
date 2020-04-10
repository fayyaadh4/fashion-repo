import React from "react";
import Menu from "../components/Menu";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Jumbotron,
  Card
} from "react-bootstrap";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import Footer from "../components/Footer";
import { LinearProgress } from "@material-ui/core";

//products page
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      isInListMode: false
    };
  }
  //set is loading to true when page opens and get products list
  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.getProductsList();
  };

  //function which calls get request from backend
  getProductsList = () => {
    fetch("/api/products")
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        this.setState({
          items: res,
          isLoading: false
        });
      });
  };

  //functionn which changes view mode
  changeViewMode = () => {
    this.setState({
      isInListMode: !this.state.isInListMode
    });
  };

  render() {
    //check react content loader
    if (this.state.isLoading) {
      return (
        <div>
          <Container fluid>
            <Menu></Menu>
            <h2 className="featuresHeading">Products</h2>
            <LinearProgress color="secondary"></LinearProgress>
          </Container>
        </div>
      );
    } else {
      if (this.state.isInListMode === false) {
        //console.log(this.state.items)
        return (
          <div>
            <Container fluid>
              <Menu></Menu>
              <h2 className="featuresHeading">Products</h2>
              <span className="selectView">
                <p>
                  Change view:{" "}
                  <ViewListIcon onClick={this.changeViewMode}>
                    Change to thumbnail view
                  </ViewListIcon>
                </p>
              </span>
              <ListGroup variant="flush">
                <Row>
                  {this.state.items.map(item => (
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
                        </Card>
                      </Col>
                    </ListGroup.Item>
                  ))}
                </Row>
              </ListGroup>
            </Container>
            <Footer></Footer>
          </div>
        );
      } else {
        return (
          <div>
            <Container fluid>
              <Menu></Menu>
              <h2 className="featuresHeading">Products</h2>
              <span className="selectView">
                <p>
                  Change view:{" "}
                  <AppsIcon onClick={this.changeViewMode}></AppsIcon>
                </p>
              </span>
              <ListGroup variant="flush">
                {this.state.items.map(item => (
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
                          </Col>
                        </Row>
                      </Jumbotron>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
            <Footer></Footer>
          </div>
        );
      }
    }
  }
}

export default Products;
