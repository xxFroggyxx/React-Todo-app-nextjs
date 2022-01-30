import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
`;

export const StyledLi = styled.li`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 1rem;
`;
