import React, { Component } from "react";
import "./App.css";
import Search from "./pages/SearchBooks"
import Saved from "./pages/SaveBooks"
import NoMatch from "./pages/NoMatch"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
        <Route exact path="/" component={Search}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/saved" component={Saved}></Route>
        <Route exact path="/saved/:id" component={Saved}></Route>
        <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
