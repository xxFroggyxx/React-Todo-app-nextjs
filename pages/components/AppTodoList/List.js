import React from "react";
import { DeleteAllButton, DeleteIcon, StyledLi, StyledUl } from "./List.styles";

function List({ todos, filter, onChange }) {
  return (
    <>
      <StyledUl
        onChange={(e) => {
          onChange(e.target.id);
        }}
      >
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
              {filter === "completed" ? <DeleteIcon /> : null}
            </StyledLi>
          ))}
      </StyledUl>
      {filter === "completed" ? (
        <DeleteAllButton>delete all</DeleteAllButton>
      ) : null}
    </>
  );
}

export default List;
