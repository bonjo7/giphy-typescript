import React, { FunctionComponent } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' component={SearchBar} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
