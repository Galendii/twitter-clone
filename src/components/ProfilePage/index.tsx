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
export default function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Breno Zielinski Galendi</h1>
        <h2>@brenozgal</h2>
        <p>
          Developer at{" "}
          <a href="https://mindconsulting.com.br"> @MindConsulting</a>
        </p>
        <ul>
          <li>
            <LocationIcon /> Sorcaba, Brasil
          </li>
          <li>
            <CakeIcon /> 28/01/1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>95</strong>
          </span>
          <span>
            <strong>100</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}
