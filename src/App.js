import React from "react";
import Routes from "./routers/router";
import { GlobalStyle } from "./assets/styles/globalStyle";
import Vlibras from "@djpfs/react-vlibras";
import { AuthProvider } from './utils/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Vlibras forceOnload={true} />
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
