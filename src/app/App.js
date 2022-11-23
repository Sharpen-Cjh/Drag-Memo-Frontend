import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

import Pages from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
