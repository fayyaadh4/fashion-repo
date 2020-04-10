import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { LinearProgress } from "@material-ui/core";
import AdminMenu from "../components/AdminMenu";
import AdminFooter from "../components/AdminFooter";

//makes routes private and only accessible by logged in users
export function withAuth(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isUserLoggedIn: false,
        isLoading: true
      };
    }

    componentDidMount() {
      // Check for authentication when the component is mounted
      this.checkAuthentication();
    }

    //check if users logged in
    checkAuthentication() {
      axios
        .get("/api/home")
        .then(res => {
          //console.log(res);
          this.setState({
            isUserLoggedIn: true,
            isLoading: false
          });
        })
        .catch(error => {
          console.log("Not Logged in", error);
          this.setState({
            isLoading: false
          });
        });
    }

    render() {
      // Optionally, you can add logic here to show a common loading animation,
      // or anything really, while the component checks for auth status.
      // You can also return null, if you don't want any special handling here.
      if (this.state.isLoading) return (
      <div>          
          <AdminMenu></AdminMenu>
          <LinearProgress></LinearProgress>
          <AdminFooter></AdminFooter>
      </div>
      );

      // This part will load your component if user is logged in,
      // else it will redirect to the login route
      if (this.state.isUserLoggedIn) {
        return <WrappedComponent authData={this.state} {...this.props} />;
      } else {
        return (
          <Redirect
            to={{ pathname: "/admin", state: { from: this.props.location } }}
          />
        );
      }
    }
  };
}
