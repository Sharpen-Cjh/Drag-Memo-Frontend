import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../config/firebase";
import { UserContext } from "../context/userContext";

import { ERROR } from "../constants/error";

export default function NavBar() {
  const [errorMessage, setErrorMessage] = useState("");
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth);

      setLoggedInUser(null);

      navigate("/login");
    } catch (error) {
      setErrorMessage(ERROR.FAIL_LOG_OUT);
    }
  };

  return (
    <NavBarWrapper>
      <Button onClick={handleLogOut}>Log out</Button>
      <div>{errorMessage}</div>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid black;
`;
