import React from "react";
import { StyledLi, StyledUl } from "./List.styles";

function List({ todos }) {
  console.log(todos);
  return (
    <StyledUl>
      {todos.map((todo) => (
        <StyledLi key={todo.id} completed={todo.completed}>
          <input id={todo.id} type="checkbox" />
          <label htmlFor={todo.id}>{todo.title}</label>
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export default List;
