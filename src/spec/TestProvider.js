import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../context/userContext";

export function TestProvider({ children }) {
  const loggedInUser = {
    reloadUserInfo: { localId: "rvW9hrTBCKXkE1ByR2F1ORWGZmk1" },
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser }}>
        {children}
      </UserContext.Provider>
    </BrowserRouter>
  );
}
