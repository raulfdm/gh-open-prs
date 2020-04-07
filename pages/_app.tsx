import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import "normalize.css";

import withData from "../src/config/apollo-client";
import { SettingsProvider } from "../src/store/store";

class MyApp extends App {
  render() {
    //@ts-ignore
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <SettingsProvider>
          <Component {...pageProps} />
        </SettingsProvider>
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
