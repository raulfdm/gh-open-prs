import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { GlobalStyle } from "../src/config/global-style";
import { PullRequests } from "../src/components/pull-requests";

const Wrapper = styled.div`
  /* background-color: #252628; */
`;

const Home = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello :)</h1>
      <PullRequests />
    </Wrapper>
  );
};

export default Home;
