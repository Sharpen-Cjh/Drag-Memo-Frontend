import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import MemoCard from "../components/MemoCard";
import SearchBar from "../components/SearchBar";

export default function MyMemos() {
  return (
    <MyMemosWrapper>
      <NavBar />
      <SearchBar></SearchBar>
      <MemoCardContainer>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
        <MemoCard></MemoCard>
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
