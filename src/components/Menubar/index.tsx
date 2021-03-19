import React from "react";

import {
  Container,
  Topside,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ExitIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfiileData,
} from "./styles";

import Button from "../Button";

const Menubar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButtons>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificaçoes</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Mensagems</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButtons>

        <MenuButtons className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfiileData>
          <strong>GiovaniAntunes</strong>
          <span>@giovaniantunes</span>
        </ProfiileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default Menubar;
