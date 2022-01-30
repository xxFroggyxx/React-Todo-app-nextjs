import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 608px;
`;
function Layout({ children }) {
  return <AppContainer>{children}</AppContainer>;
}

export default Layout;
