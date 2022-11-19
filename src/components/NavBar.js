import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Button>Log out</Button>
    </NavBarWrapper>
  );
}
const NavBarWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid black;
`;
