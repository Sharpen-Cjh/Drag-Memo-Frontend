import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import MemoCard from "../components/MemoCard";
import SearchBar from "../components/SearchBar";
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

        console.log(memos);
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
      <SearchBar></SearchBar>
      <MemoCardContainer>
        {myMemos.map((memo) => {
          return (
            <MemoCard
              key={memo._id}
              title={memo.title}
              description={memo.description}
              handleClick={() => navigate(`/memos/${memo._id}`)}
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
  border: 1px solid black;
`;

const MemoCardContainer = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top: 30px;
`;
