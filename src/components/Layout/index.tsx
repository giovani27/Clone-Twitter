import React from "react";
import { Container, Wrapper } from "./styles";

import Main from "../Main";
import MenuBar from "../Menubar";
import SideBar from "../Sidebar";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
