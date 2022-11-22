import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth, redirectToLogin } from "../config/firebase";
import { UserContext } from "../context/userContext";
import axiosInstance from "../api/axios";
import { ERROR } from "../constants/error";

import { Button } from "../ui/button";

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

  const handleCreate = () => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const googleId = user?.reloadUserInfo.localId;
          const {
            status,
            data: {
              data: { _id },
            },
          } = await axiosInstance.post(`/users/${googleId}/memo`);
          status === 201
            ? navigate(`/memos/${_id}`)
            : setErrorMessage(ERROR.FAIL_CREATE_MEMO);
        } else {
          redirectToLogin();
        }
      } catch (error) {
        setErrorMessage(error);
      }
    });
  };

  return (
    <NavBarWrapper>
      <NavBarButtonWrapper>
        <CreateButton onClick={handleCreate}>Create</CreateButton>
        <div>{errorMessage}</div>
        <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
      </NavBarButtonWrapper>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  width: 100%;
`;

const NavBarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogOutButton = styled(Button)``;

const CreateButton = styled(Button)``;
