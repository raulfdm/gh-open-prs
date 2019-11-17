import React from "react";

import styled from "styled-components";

import { Projects } from "../src/components/projects/";
import { Menu } from "../src/components/menu";
import { PageTitle } from "../src/components/page-title";
import { PageHead } from "../src/components/head";
import { Footer } from "../src/components/footer";

const Wrapper = styled.main``;

const ContentWrapper = styled.div`
  /* max-width: 800px; */
  /* margin: 0 auto; */

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
          <PageTitle />
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
