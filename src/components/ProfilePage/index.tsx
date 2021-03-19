import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

import Feed from "../Feed";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Giovani Antunes</h1>
        <h2>@giovani27</h2>

        <p>Desenvolvedor Web</p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 27/01/1996
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>25</strong>{" "}
          </span>
          <span>
            <strong>67 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
