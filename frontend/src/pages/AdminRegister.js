import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AdminMenu from "../components/AdminMenu";
import { withAuth } from "../components/ProtectedRoute";
import AdminFooter from "../components/AdminFooter";
import { Jumbotron } from "react-bootstrap";

//registration component
function Register() {
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
            Register New Admin Member
          </Typography>
          <form
            className="form"
            noValidate
            action="http://localhost:8000/signup"
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
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
      <Jumbotron id="fillSpace"></Jumbotron>
      <AdminFooter id="footer"></AdminFooter>
    </div>
  );
}

export default withAuth(Register);
