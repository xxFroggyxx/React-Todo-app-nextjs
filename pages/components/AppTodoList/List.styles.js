import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";

export const StyledUl = styled.ul`
  list-style-type: none;
`;

export const StyledLi = styled.li`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  font-size: 20px;
  color: #bdbdbd;
  margin-left: 1em;
  cursor: pointer;
`;

export const DeleteAllButton = styled.button`
  background: #eb5757;
  border-radius: 4px;
  width: 124px;
  height: 40px;
  border: 0;
  outline: 0;
  color: #fff;
  float: right;
  cursor: pointer;
`;
