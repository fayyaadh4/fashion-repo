import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/LoginPage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Logout from "./components/Logout";
import AdminHome from "./pages/AdminHome";
import AdminProducts from "./pages/AdminProductsPage";
import NotFound from "./pages/NotFound";
import AdminRegister from "./pages/AdminRegister";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route
              className="privatePage"
              path="/admin/home"
              component={AdminHome}
            ></Route>
            <Route
              className="privatePage"
              path="/admin/products"
              component={AdminProducts}
            ></Route>
            <Route path="/admin/logout" component={Logout}></Route>
            <Route
              className="privatePage"
              path="/admin/register"
              component={AdminRegister}
            ></Route>
            <Route path="/admin" exact={true} component={Login}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
