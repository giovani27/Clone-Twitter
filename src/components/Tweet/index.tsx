import React from "react";
import {
  Container,
  Retweeted,
  RocketIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetsIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketIcon />
        Voce Retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete nao tem Ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetsIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              998
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
