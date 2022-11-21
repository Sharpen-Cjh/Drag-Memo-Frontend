import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiosInstance from "../api/axios";
import { UserContext } from "../context/userContext";

export default function Memo() {
  const params = useParams();
  const [memo, setMemo] = useState({
    title: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const {
    loggedInUser: {
      reloadUserInfo: { localId },
    },
  } = useContext(UserContext);

  useEffect(() => {
    const getMemo = async () => {
      try {
        const response = await axiosInstance.get(
          `users/${localId}/memos/${params.memoId}`
        );
        const { memo } = response.data;

        setMemo(memo);
      } catch (error) {
        setErrorMessage(error);
      }
    };
    if (localId) {
      getMemo();
    }
  }, [localId, params.memoId]);

  return (
    <MemoWrapper>
      <div>{errorMessage}</div>
      <MemoContainer contentEditable>
        <MemoHeader>{memo.title}</MemoHeader>
        <MemoBody>{memo.description}</MemoBody>
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
  border: 1px solid black;

  border-radius: 20px;
`;
const MemoHeader = styled.div`
  height: 10%;
  border-radius: 20px;
  font-size: 30px;
  padding: 10px;
`;

const MemoBody = styled.div`
  height: 90%;
  padding: 10px;
`;
