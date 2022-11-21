import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import MemoCard from "../components/MemoCard";
import axiosInstance from "../api/axios";

import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function MyMemos() {
  const navigate = useNavigate();
  const [myMemos, setMyMemos] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  const {
    loggedInUser: {
      reloadUserInfo: { localId },
    },
  } = useContext(UserContext);

  useEffect(() => {
    const getMyMemos = async () => {
      try {
        const response = await axiosInstance.get(`/users/${localId}/memos`);
        const { memos } = response.data;

        setMyMemos(memos);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    if (localId) {
      getMyMemos();
    }
  }, [localId]);

  return (
    <MyMemosWrapper>
      <div>{errorMessage}</div>
      <NavBar />
      <MemoCardContainer>
        {myMemos.map((memo) => {
          return (
            <MemoCard
              key={memo._id}
              title={memo.title}
              description={memo.description}
              handleShowMemo={() => navigate(`/memos/${memo._id}`)}
              handleDeleteMemo={async (event) => {
                try {
                  event.stopPropagation();
                  const confirmCheck = window.confirm(
                    "Do you want to delete?Once deleted, restoration is not possible"
                  );
                  if (confirmCheck) {
                    await axiosInstance.delete(
                      `/users/${localId}/memos/${memo._id}`
                    );
                    window.location.replace("/");

                    return;
                  }
                } catch (error) {
                  setErrorMessage(error);
                }
              }}
            />
          );
        })}
      </MemoCardContainer>
    </MyMemosWrapper>
  );
}

const MyMemosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MemoCardContainer = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 30px;
`;
