import styled from "styled-components";

export const AddContainer = styled.form`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2.5em;

  input {
    height: 56px;
    border-radius: 12px;
    border: 0;
    outline: 0;
    border-color: #bdbdbd;
    border: 1px solid #bdbdbd;
    padding: 0.5rem 1rem;
    transition: 0.5s all ease;
    :hover {
      border-color: black;
    }
    :focus {
      border-color: black;
    }
  }

  button {
    cursor: pointer;
    background-color: #2f80ed;
    border-radius: 12px;
    color: #fff;
    font-weight: 600;
    border: 0;
    border: 1px solid #bdbdbd;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    transition: 0.5s all ease;
    :hover {
      background-color: #2166c2;
    }
  }
`;
