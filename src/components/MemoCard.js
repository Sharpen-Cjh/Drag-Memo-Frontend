import React from "react";

import { Button } from "../ui/button";
import styled from "styled-components";

export default function MemoCard({
  title,
  description,
  handleShowMemo,
  handleDeleteMemo,
}) {
  return (
    <MemoCardWrapper onClick={handleShowMemo}>
      <MemoCardHeader>
        <MemoTitle>{title}</MemoTitle>
        <MemoDeleteButton onClick={handleDeleteMemo}>Delete</MemoDeleteButton>
      </MemoCardHeader>
      <MemoDescription>{description}</MemoDescription>
    </MemoCardWrapper>
  );
}
const MemoCardWrapper = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #0d6efd;
  border-radius: 10px;
`;

const MemoCardHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemoTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 20px;
  border-radius: 5px;
`;

const MemoDescription = styled.div`
  width: 250px;
  height: 90%
  font-size: 10px;
  margin-top: 20px;
  -webkit-line-clap:5;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow:ellipsis;

`;

const MemoDeleteButton = styled(Button)`
  width: 80px;
  height: 30px;
`;
