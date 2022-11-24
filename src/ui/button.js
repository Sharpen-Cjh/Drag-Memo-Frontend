import styled from "styled-components";

export const Button = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
  background-color: #0d6efd;
  color: #ffffff;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  transition: 0.5s;
  :hover {
    background-color: #fff;
    color: #0d6efd;
    border: 1px solid #0d6efd;
  }
`;
