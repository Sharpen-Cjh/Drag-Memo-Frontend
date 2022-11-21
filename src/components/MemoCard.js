import React from "react";
import styled from "styled-components";

export default function MemoCard({ title, description, handleClick }) {
  return (
    <MemoCardWrapper onClick={handleClick}>
      <MemoTitle>{title}</MemoTitle>
      <MemoDescription>{description}</MemoDescription>
    </MemoCardWrapper>
  );
}

const MemoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  height: 250px;
  width: 250px;
  padding: 10px;
`;

const MemoTitle = styled.div`
  width: 100%;
  height: 10%;
`;

const MemoDescription = styled.div`
  width: 100%
  height: 90%
`;
