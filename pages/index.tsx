import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { GlobalStyle } from "../src/config/global-style";
import { PullRequests } from "../src/components/pull-requests";

const Wrapper = styled.div`
  /* background-color: #252628; */
`;

const PrsWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
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
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello :)</h1>

      <PrsWrapper>
        {repoLists.map(repo => (
          <PullRequests key={repo} repoName={repo} />
        ))}
      </PrsWrapper>
    </Wrapper>
  );
};

export default Home;
