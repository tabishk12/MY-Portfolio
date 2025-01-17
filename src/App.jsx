import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter } from "react-router-dom";
import DetailsScreen from "./Components/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <DetailsScreen />
      </BrowserRouter>
    </>
  );
}

export default App;
