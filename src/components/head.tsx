import React from "react";
import Head from "next/head";

import { GlobalStyle } from "../config/global-style";
import { useSettings } from "../store/store";

export const PageHead = () => {
  const { settings } = useSettings();

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{settings.orgName} Pull Requests: FE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
