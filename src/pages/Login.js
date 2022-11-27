import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";

import axiosInstance from "../api/axios";

import { ERROR } from "../constants/error";

import styled from "styled-components";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const {
        user: {
          displayName,
          reloadUserInfo: { localId },
        },
      } = await signInWithPopup(auth, provider);

      const { status } = await axiosInstance.post("/login", {
        username: displayName,
        googleId: localId,
      });

      status === 200 ? navigate("/") : setErrorMessage(ERROR.FAIL_LOGIN);
    } catch (error) {
      setErrorMessage(ERROR.FAIL_LOGIN);
    }
  };

  return (
    <>
      <LoginPageHeader>Hello-word!</LoginPageHeader>
      <LoginButtonWrapper>
        <LoginButton onClick={handleLogin}>Google Login</LoginButton>
        <div>{errorMessage}</div>
      </LoginButtonWrapper>
    </>
  );
}
const LoginButton = styled.button`
  width: 300px;
  height: 100px;
  font-size: 30px;
  background-color: #0d6efd;
  color: #fff;
  border: 1px solid #0d6efd;
  border-radius: 10px;
  :hover {
    background-color: #fff;
    color: #0d6efd;
    border: 1px solid #0d6efd;
  }
`;

const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginPageHeader = styled.div`
  font-size: 100px;
  color: #fff;
  background-color: #0d6efd;
  margin: 0;
  text-align: center;
`;
