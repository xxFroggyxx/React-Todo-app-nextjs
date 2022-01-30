import React from "react";
import { AddButton, AddContainer } from "./Add.styles";

function Add() {
  return (
    <AddContainer>
      <input placeholder="add details" required />
      <button>Add</button>
    </AddContainer>
  );
}

export default Add;
