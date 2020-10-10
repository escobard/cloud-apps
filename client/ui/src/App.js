import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "pages";

import { Header, Footer } from "components";

import "styles/global.scss";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <div className="divider" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <span>Page not found.</span>
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
