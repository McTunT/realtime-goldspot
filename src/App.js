import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import GoldAssociation from "./components/GoldAssociation";
import GoldSpot from "./components/HuManInput";
import "react-tippy/dist/tippy.css";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Kanit", sans-serif;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`;
const App = () => {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
        <div className="content">
          <Route exact path="/" component={GoldAssociation} />
          <Route path="/association" component={GoldSpot} />
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
