import React from "react";

import styled from "styled-components";

import { Projects } from "../src/components/projects/";
import { Menu } from "../src/components/menu";
import { PageHead } from "../src/components/head";
import { Footer } from "../src/components/footer";
import { AppTitleBar } from "../src/components/app-title-bar";
import { OrgTitle } from "../src/components/org-title";

const Wrapper = styled.main``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <PageHead />
      <Menu>
        <ContentWrapper>
          <AppTitleBar />
          <OrgTitle />
          <Projects />
          <Footer />
        </ContentWrapper>
      </Menu>
    </Wrapper>
  );
};

Home.getInitialProps = ({ query }: any) => {
  return { query };
};

export default Home;
