import React from "react";

import styled from "styled-components";
import { Button } from "../ui/button";

export default function SearchBar({ handleSearchTerm, searchInputValue }) {
  const handleSearchInput = (event) => {
    handleSearchTerm(event);
  };

  return (
    <SearchBarWrapper>
      <SearchBarInput
        onChange={handleSearchInput}
        value={searchInputValue}
        placeholder="메모 제목을 검색해보세요"
      />
      <SearchBarButton>Search</SearchBarButton>
    </SearchBarWrapper>
  );
}
const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 2px;
  margin-left: auto;
`;

const SearchBarInput = styled.input`
  border: 1px solid #0d6efd;
  border-radius: 10px;
  outline: none;
  width: 300px;
`;

const SearchBarButton = styled(Button)``;
