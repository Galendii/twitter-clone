import React from "react";
import {
  Container,
  Retweeted,
  Icon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ImageContent,
} from "./styles";

export default function Tweet() {
  return (
    <Container>
      <Retweeted>
        <Icon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Mind Consulting</strong>
            <span>@mindconsulting</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>We make IT Happen!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              22
            </Status>
            <Status>
              <LikeIcon />
              723
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
