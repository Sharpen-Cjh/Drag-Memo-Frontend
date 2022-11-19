import React from "react";
import { AuthProvider } from "../context/AuthProvider";

import Pages from "./Pages";

function App() {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  );
}

export default App;
