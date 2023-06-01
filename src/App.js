import React from "react";
import Routes from "./routers/router";
import { GlobalStyle } from "./assets/styles/globalStyle";
import Vlibras from "@djpfs/react-vlibras"

function App() {
  return (
    <>
      <div className="App">
        <Vlibras forceOnload={true} />
        <GlobalStyle />
        <Routes />
      </div>
    </>
  );
}

export default App;
