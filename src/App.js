import React from "react";
import Routes from "./routers/router";
import { GlobalStyle } from "./assets/styles/globalStyle";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle/>
        <Routes />
      </div>
    </>
  );
}

export default App;
