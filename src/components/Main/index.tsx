import React from "react";

import ProfilePage from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottoMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Giovani</strong>
          <span>650 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />

      <BottoMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottoMenu>
    </Container>
  );
};

export default Main;
