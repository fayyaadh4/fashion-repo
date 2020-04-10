import React from "react";
import AdminMenu from "../components/AdminMenu";
import AdminFooter from "../components/AdminFooter";
import { withAuth } from "../components/ProtectedRoute";
import { LinearProgress } from "@material-ui/core";
import { Jumbotron } from "react-bootstrap";

//admin home page
class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isLoading: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.getUser();
  };

  //gets user thats logged in
  getUser = () => {
    fetch("/api/home")
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        this.setState({
          user: res,
          isLoading: false
        });
      });
  };

  render() {
    //check react content loader
    if (this.state.isLoading) {
      return (
        <div>
          <AdminMenu></AdminMenu>
          <LinearProgress></LinearProgress>
          <AdminFooter></AdminFooter>
        </div>
      );
    } else {
     // console.log(this.state.user.username);
      return (
        <div>
          <AdminMenu></AdminMenu>
          <div style={{ marginLeft: "10px", marginBottom: "100px" }}>
            <h1 style={{ textAlign: "left" }}>
              Welcome{" "}
              <span style={{ textTransform: "capitalize" }}>
                {this.state.user.username}{" "}
              </span>
            </h1>
            <Jumbotron style={{ backgroundColor: "ivory" }}>
              <p>
                With admin rights given to you, you are now able to access some
                special features such as:
              </p>
              <ul>
                <li>Adding new items</li>
                <li>Editing existing items</li>
                <li>Registering new admin users locally</li>
              </ul>
            </Jumbotron>
          </div>
          <Jumbotron id="fillSpace"></Jumbotron>
          <AdminFooter id="footer"></AdminFooter>
        </div>
      );
    }
  }
}
//private page only accessible by admin
export default withAuth(AdminHome);
