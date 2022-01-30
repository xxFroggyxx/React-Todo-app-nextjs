import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddContainer } from "./Add.styles";

function Add({ todos, setTodos }) {
  const [content, setContent] = useState("");

  const addNewTodo = (content) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: content,
        completed: false,
      },
    ]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addNewTodo(content);
    setContent("");
  };
  return (
    <AddContainer onSubmit={handleFormSubmit}>
      <input
        placeholder="add details"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        required
      />
      <button>Add</button>
    </AddContainer>
  );
}

export default Add;
