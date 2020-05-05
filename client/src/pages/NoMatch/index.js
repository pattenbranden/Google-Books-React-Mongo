import React, { Component } from "react";
import NavTabs from "../../components/Nav/NavTabs"
import Jumbotron from "../../components/Jumbotron"

class noMatch extends Component {
  render() {
    return (
      <div className="noMatch">
        <NavTabs />
        <Jumbotron>
          <h1 className="text-dark">
            404 CAN'T FIND WHAT YOU'RE LOOKING FOR.. SAD
                    </h1>
        </Jumbotron>
        <h1></h1>
      </div>
    );
  }
}


export default noMatch;