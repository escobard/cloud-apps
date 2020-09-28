import React, { useState, useEffect, useContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getNotes } from "utils";

import { useGetRequest } from "hooks";

import { Home } from "pages";

import Header from "components/Header";
import Footer from "components/Footer";;

import "styles/global.scss";


const App = () => {
  // TODO move to provider
  const [notes, setNotes] = useState([]);

  const { data: fetchedNotes } = useGetRequest(getNotes);

  // TODO - remove after context refactor, should be unecessary
  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);


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
        <Footer
          count={notes && notes.length}
          hasError={!Array.isArray(notes)}
        />
      </>
    </Router>
  );
};

export default App;
