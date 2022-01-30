import React from "react";
import { DeleteAllButton, DeleteIcon, StyledLi, StyledUl } from "./List.styles";

function List({ todos, setTodos, filter, onChange }) {
  const deleteTask = (arg) => {
    const newTodos = todos.filter((todo) => {
      return todo.id != arg;
    });
    setTodos(newTodos);
  };
  const deleteAllTasks = () => {
    const completedTasks = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(completedTasks);
  };

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
              {filter === "completed" ? (
                <DeleteIcon
                  onClick={() => {
                    deleteTask(todo.id);
                  }}
                />
              ) : null}
            </StyledLi>
          ))}
      </StyledUl>
      {(filter === "completed") &
      (todos.filter((todo) => {
        return todo.completed;
      }).length >
        0) ? (
        <DeleteAllButton onClick={deleteAllTasks}>delete all</DeleteAllButton>
      ) : null}
    </>
  );
}

export default List;
