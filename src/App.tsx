import React, { FunctionComponent } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <>
      <Router>
        <div className='main'>
          <NavBar />

          <Switch>
            <Route exact path='/' component={SearchBar} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
