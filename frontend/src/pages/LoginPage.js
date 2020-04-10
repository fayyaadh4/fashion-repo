import React from "react";
import GoogleLogin from "../components/GoogleLogin";
import FacebookLogin from "../components/FacebookLogin";
import AdminMenu from "../components/AdminMenu";
import AdminFooter from "../components/AdminFooter";

import { Jumbotron } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//log in page
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <AdminMenu></AdminMenu>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className="form"
              noValidate
              action="http://localhost:8000/locallogin"
              method="post"
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                style={{ marginBottom: "10px" }}
              >
                Sign In
              </Button>
            </form>
          </div>
          <p style={{ textAlign: "center" }}>Or sign in with</p>
        </Container>
        <Container maxWidth="md">
          <div className="prodButton">
            <GoogleLogin></GoogleLogin>
            <FacebookLogin></FacebookLogin>
          </div>
        </Container>
        <Jumbotron id="fillSpace"></Jumbotron>
        <AdminFooter></AdminFooter>
      </div>
    );
  }
}
/*

              noValidate
              action="http://localhost:8000/locallogin"
              method="post"
              */
