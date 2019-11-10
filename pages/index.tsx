import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { GlobalStyle } from "../src/config/global-style";
import { PullRequests } from "../src/components/pull-requests";
import { BlendleLogo } from "../src/components/blendle-logo";

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
`;

const Home = () => {
  const repoLists = [
    "blendle-lego",
    "blendle-web-client",
    "web-proxy",
    "web-payment",
    "web-landings"
  ];

  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Blendle Pull Requests: FE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle>
        <BlendleLogo />
      </PageTitle>

      <PrsWrapper>
        {repoLists.map(repo => (
          <PullRequests key={repo} repoName={repo} />
        ))}
      </PrsWrapper>
    </Wrapper>
  );
};

export default Home;
