import React from "react";
import styled from "styled-components";
import { Button } from "../ui/button";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder="Search title" />
      <SearchBarButton>Search</SearchBarButton>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 2px;
`;

const SearchBarInput = styled.input`
  border: 1px solid #0d6efd;
  outline: none;
  width: 80%;
`;
const SearchBarButton = styled(Button)`
  width: 20%;
`;
