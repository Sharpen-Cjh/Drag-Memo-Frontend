import React from "react";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder="검색하세요" />
      <SearchBarButton>버튼</SearchBarButton>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2px;
`;

const SearchBarInput = styled.input`
  width: 80%;
`;
const SearchBarButton = styled.button`
  width: 20%;
`;
