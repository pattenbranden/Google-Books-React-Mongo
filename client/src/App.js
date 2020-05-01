import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookSearchBox from "./components/BookSearchBox"
import Search from "./pages/search/index"
import Saved from "./pages/saved/index"
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
          <Route component={NoMatch} />
        </Switch>
      </Router>




      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <BookSearchBox />
      // </div>
    );
  }
}

export default App;
