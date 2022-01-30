import React from "react";
import { StyledLi, StyledUl } from "./List.styles";

function List({ todos, filter }) {
  return (
    <StyledUl>
      {todos
        .filter((todo) => {
          switch (filter) {
            case "default":
              return todo;
            case "active":
              return !todo.completed;
            case "completed":
              return todo.completed;
          }
        })
        .map((todo) => (
          <StyledLi key={todo.id} completed={todo.completed}>
            <input
              id={todo.id}
              type="checkbox"
              defaultChecked={todo.completed}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </StyledLi>
        ))}
    </StyledUl>
  );
}

export default List;
