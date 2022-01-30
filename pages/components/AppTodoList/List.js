import React from "react";
import { StyledLi, StyledUl } from "./List.styles";

function List() {
  return (
    <StyledUl>
      <StyledLi>
        <input type="checkbox" />
        <label>Go to the gym</label>
      </StyledLi>
      <StyledLi>
        <input type="checkbox" />
        <label>Learn programming</label>
      </StyledLi>
      <StyledLi>
        <input type="checkbox" />
        <label>Make a report</label>
      </StyledLi>
      <StyledLi>
        <input type="checkbox" />
        <label>Go to bed at 11:00PM</label>
      </StyledLi>
    </StyledUl>
  );
}

export default List;
