import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import AdminProducts from "./AdminProducts";
import axios from "axios";
import { LinearProgress } from "@material-ui/core";

//adding products(ONLY ADMIN)
class AdminAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      details: "",
      selectedFile: null,
      user: [],
      items: [],
      isInListMode: false,
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.getProductsList();
  };


  //gets all products
  getProductsList = () => {
    fetch("/api/products")
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        this.setState({
          items: res,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //handles details input
  handleDetailsChange = e => {
    e.preventDefault();
    this.setState({
      details: e.target.value
    });
  };

  //handles file selector
  fileSelectedHandler = e => {
    // console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  //function which adds item
  handleAddItem = e => {
    e.preventDefault();
    //console.log(this.state.selectedFile)
    const data = new FormData();
    data.append("source", this.state.selectedFile);
    data.append("details", this.state.details);
    //console.log(this.state.details);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    axios
      .post("/api/add", data, config, {
        //receive two endpoint url, form data
        //  method: 'post',
        //    headers: {
        //        "Content-type": 'multipart/form-data'
        //    },
        //  body: JSON.stringify({ details: this.state.details })
      })
      .then(res => {
        console.log(res.status);
      })
      .then(this.getProductsList())
      .then(this.getProductsList())
      .then(
        this.setState({
          details: "",
          selectedFiles: null
        })
      );
  };

  //function which removes an item
  handleRemove = prodID => {
    fetch(`/api/product/delete/${prodID}`)
      .then(res => res.json())
      .then(res => {
        console.log("item removed");
      })
      .then(this.getProductsList())
      .then(this.getProductsList())
      .catch(err => {
        console.log(err);
      });
  };

  //allows editing of an item
  handleEdit = async prodID => {
    if (this.state.details) {
      //  console.log(prodID);
      //console.log(this.state.details);
      await fetch(`/api/product/edit/${prodID}`, {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          details: this.state.details
        })
      })
        .then(res => res.json())
        .then(this.getProductsList())
        .then(this.getProductsList())
        .then(
          this.setState({
            details: ""
          })
        );
    } else {
      console.log("No edited information");
    }
  };

  //change view
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
          <LinearProgress></LinearProgress>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Row>
              <form className="todoForm">
                <InputGroup>
                  <Col md={4} lg={4}>
                    <FormControl
                      type="file"
                      name="source"
                      onChange={this.fileSelectedHandler}
                    ></FormControl>
                  </Col>
                  <Col md={4} lg={6}>
                    <FormControl
                      style={{ width: "300px" }}
                      type="text"
                      id="details"
                      name="details"
                      value={this.state.details}
                      onChange={this.handleDetailsChange}
                      placeholder="Insert details for new or edited item..."
                    ></FormControl>
                  </Col>
                  <Col md={4} lg={2}>
                    <Button
                      type="submit"
                      value="submit"
                      onClick={this.handleAddItem}
                    >
                      Add Item
                    </Button>
                  </Col>
                </InputGroup>
              </form>
            </Row>
          </Container>
          <AdminProducts
            items={this.state.items}
            isInListMode={this.state.isInListMode}
            handleRemove={this.handleRemove}
            changeViewMode={this.changeViewMode}
            handleEdit={this.handleEdit}
          ></AdminProducts>
        </div>
      );
    }
  }
}

export default AdminAddProduct;
