import React from "react";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";
import StickyBox from "react-sticky-box";
import List from "../List";
import News from "../News";
import FollowSugestion from "../FollowSugestion";
export default function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title={"Talvez você curta"}
            elements={[
              <FollowSugestion
                name="Bernardo Camargo"
                nickname="@bernacamrgo"
              />,
              <FollowSugestion name="Mariana Ayub" nickname="@marianaayub" />,
              <FollowSugestion
                name="José Gonçalves"
                nickname="@josegoncalves"
              />,
            ]}
          />
          <List
            title={"O que está acontecendo"}
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title={"O que está acontecendo"}
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
