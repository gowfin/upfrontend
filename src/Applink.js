import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./common/App.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Watchvideo from "./auth/Watchvideo";
import Profile from "./main/profile";
import AboutUs from "./auth/Aboutus";
import Notice from "./auth/noticeboard";
import Main from "./Main";
import Dashboard from "./main/Dashboard/Dashboard"
import PropTypes from "prop-types";
import Imghome from "./main/imagehome"
import test from "./main/testimg"
import ResetPw from "./auth/resetpw"
import Form from "./main/form"

function App() {
 
  
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/"  component={Main}/>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Watchvideo" component={Watchvideo} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/dashboard/:email" component={Dashboard} />
          <Route exact path="/imghome" component={Imghome} />
          <Route exact path="/test" component={test} />
          <Route exact path="/auth/resetpw" component={ResetPw} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/noticeboard" component={Notice} />
        </Switch>
      </Fragment>
    </Router>
  );
}
App.propTypes = {
  loadUser: PropTypes.func,
};

export default App;
