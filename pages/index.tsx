import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { GlobalStyle } from "../src/config/global-style";
import { PullRequests } from "../src/components/pull-requests";
// import { BlendleLogo } from "../src/components/blendle-logo";
import { AppConfig } from "../src/types";

type HomeType = {
  config: AppConfig;
};
const Wrapper = styled.div``;

const PrsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  margin: 0;
  text-align: center;
  padding-top: 16px;
  z-index: 9;
  position: sticky;
  top: 0;
  background-color: #252628;
  img {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    max-width: 100px;
  }
`;

const Home = ({ config }: HomeType) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>{config.organizationName} Pull Requests: FE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle>
        <img src={config.logoUrl} alt="Organization logo" />
      </PageTitle>

      <PrsWrapper>
        {config.repositoriesToList.map(repo => (
          <PullRequests
            key={repo}
            repositoryName={repo}
            organizationName={config.organizationName}
          />
        ))}
      </PrsWrapper>
    </Wrapper>
  );
};

export default Home;
