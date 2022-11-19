import React from "react";
import styled from "styled-components";

export default function Memo() {
  return (
    <MemoWrapper>
      <MemoContainer contentEditable>
        <MemoHeader>제목</MemoHeader>
        <MemoBody>내용</MemoBody>
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
