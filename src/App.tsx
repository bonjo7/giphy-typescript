import * as React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { GifList } from "./Components/GifList/GifList";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FunctionComponent = () => (
  <>
    <NavBar />
    <SearchBar />
    <GifList />
  </>
);
export default App;
