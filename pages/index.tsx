import React from "react";
import Head from "next/head";
// import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { GlobalStyle } from "../src/config/global-style";

// import { REPOSITORY } from "../src/queries";

const Wrapper = styled.div`
  /* background-color: #252628; */
`;

const Home = () => {
  // const { data, loading, error } = useQuery(REPOSITORY);

  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello :)</h1>
    </Wrapper>
  );
};

export default Home;
