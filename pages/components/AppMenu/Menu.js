import React from "react";
import { MenuContainer } from "./Menu.styles";

function Menu({ setFilter }) {
  return (
    <MenuContainer
      onChange={(e) => {
        setFilter(e.target.value); // Change soon..
      }}
    >
      <label>
        <input type="radio" name="menu" value="default" defaultChecked />{" "}
        <span>All</span>
      </label>

      <label>
        <input type="radio" name="menu" value="active" />
        <span>Active</span>
      </label>

      <label>
        <input type="radio" name="menu" value="completed" />
        <span>Completed</span>
      </label>
    </MenuContainer>
  );
}

export default Menu;
