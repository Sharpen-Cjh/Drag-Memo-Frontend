import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, redirectToLogin } from "../config/firebase";

import axiosInstance from "../api/axios";

import { ERROR } from "../constants/error";
import { MESSAGE } from "../constants/message";
import styled from "styled-components";
import { Button } from "../ui/button";

export default function NavBar() {
  const [errorMessage, setErrorMessage] = useState("");
  const [createMemoTitle, setCreateMemoTitle] = useState("");
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
  const handleCreateMemoTitleInput = (event) => {
    setCreateMemoTitle(event.target.value);
  };

  const handleCreate = () => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (!createMemoTitle) {
          return alert(MESSAGE.ALERT_INPUT_MEMO_TITLE);
        }

        if (user) {
          const googleId = user?.reloadUserInfo.localId;
          const {
            status,
            data: {
              data: { _id },
            },
          } = await axiosInstance.post(`/users/${googleId}/memo`, {
            title: createMemoTitle,
          });
          status === 201
            ? navigate(`/memos/${_id}`)
            : setErrorMessage(ERROR.FAIL_CREATE_MEMO);
        } else {
          redirectToLogin();
        }
      } catch (error) {
        setErrorMessage(ERROR.FAIL_CREATE_MEMO);
      }
    });
  };
  return (
    <NavBarWrapper>
      <NavBarButtonWrapper>
        <CreateMemoInputWrapper>
          <CreateMemoTitleInput
            onChange={handleCreateMemoTitleInput}
            value={createMemoTitle}
            placeholder="메모 제목을 입력하세요"
            data-testid="memo-create-title-input"
          />
          <CreateButton data-testid="memo-create-button" onClick={handleCreate}>
            메모 만들기
          </CreateButton>
        </CreateMemoInputWrapper>
        <div>{errorMessage}</div>
        <LogOutButton data-testid="logout-button" onClick={handleLogOut}>
          로그아웃
        </LogOutButton>
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

const LogOutButton = styled(Button)`
  width: 100px;
`;

const CreateButton = styled(Button)``;

const CreateMemoTitleInput = styled.input`
  border: 1px solid #0d6efd;
  border-radius: 10px;
  outline: none;
  width: 300px;
  height: 30px;
`;

const CreateMemoInputWrapper = styled.div`
  width: 100%;
`;
