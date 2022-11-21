import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosInstance from "../api/axios";

import { UserContext } from "../context/userContext";

import { ERROR } from "../constants/error";
import { Button } from "../ui/button";

export default function Memo() {
  const [memoTitle, setMemoTitle] = useState("");
  const [memoDescription, setMemoDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const {
    loggedInUser: {
      reloadUserInfo: { localId },
    },
  } = useContext(UserContext);

  const handleSaveAndClose = async () => {
    if (!memoTitle) {
      return alert("제목을 작성해주세요");
    }
    try {
      const { status } = await axiosInstance.patch(
        `/users/${localId}/memos/${params.memoId}`,
        {
          title: memoTitle,
          description: memoDescription,
        }
      );
      status === 200 ? navigate("/") : setErrorMessage(ERROR.FAIL_SAVE);
    } catch (error) {
      setErrorMessage(ERROR.FAIL_SAVE);
    }
  };

  const handleUpdateTitle = async (event) => {
    setMemoTitle(event.target.value);
  };

  const handleUpdateDescription = async (event) => {
    setMemoDescription(event.target.value);
  };

  useEffect(() => {
    const getMemo = async () => {
      try {
        const response = await axiosInstance.get(
          `users/${localId}/memos/${params.memoId}`
        );
        const { memo } = response.data;
        const { title, description } = memo;

        setMemoTitle(title);
        setMemoDescription(description);
      } catch (error) {
        setErrorMessage(ERROR.FAIL_GET_MEMO);
      }
    };
    if (localId) {
      getMemo();
    }
  }, [localId, params.memoId]);

  return (
    <MemoWrapper>
      <div>{errorMessage}</div>
      <MemoContainer>
        <MemoHeader>
          <MemoTitle
            className="memo-title"
            onChange={handleUpdateTitle}
            value={memoTitle}
          ></MemoTitle>
          <MemoCloseButton onClick={handleSaveAndClose}>Back</MemoCloseButton>
        </MemoHeader>
        <MemoDescription
          className="memo-description"
          onChange={handleUpdateDescription}
          value={memoDescription}
        ></MemoDescription>
      </MemoContainer>
    </MemoWrapper>
  );
}
const MemoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  min-height: 100vh;
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
  border: 5px solid #0d6efd;

  border-radius: 20px;
`;
const MemoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
  border-radius: 20px;
  font-size: 30px;
  padding: 10px;
`;

const MemoTitle = styled.input`
  font-size: 30px;
  border: none;
`;
const MemoCloseButton = styled(Button)`
  height: 40px;
`;

const MemoDescription = styled.textarea`
  height: 90%;
  padding: 10px;
  font-size: 20px;
  border: none;
`;
