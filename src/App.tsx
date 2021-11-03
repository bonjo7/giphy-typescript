import * as React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FunctionComponent = () => (
  <>
    <NavBar />
    <SearchBar />
  </>
);
export default App;
