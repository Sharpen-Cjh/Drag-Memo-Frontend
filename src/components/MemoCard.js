import React from "react";
import styled from "styled-components";

import { Button } from "../ui/button";

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

const MemoTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 20px;
  border-radius: 5px;
`;

const MemoDescription = styled.div`
  width: 100%
  height: 90%
  font-size: 10px;
  margin-top: 20px;

`;

const MemoDeleteButton = styled(Button)`
  width: 80px;
  height: 30px;
`;

const MemoCardHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
