import React from "react";

import StickyBox from "react-sticky-box";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

import List from "../List";
import FollowSugestion from "../FollowSugestion/index";
import News from "../News/index";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="Flavio Antunes"
                nickname="@FlavioAntunes"
              />,
              <FollowSugestion name="Natan Rosa" nickname="@NatanRosa" />,
              <FollowSugestion
                name="Victoria Rangel"
                nickname="@VictoriarRang"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
