import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";

import withData from "../src/config/apollo-client";

class MyApp extends App {
  render() {
    //@ts-ignore
    const { Component, pageProps, apollo } = this.props;
    console.log({ Component, pageProps, apollo });
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
