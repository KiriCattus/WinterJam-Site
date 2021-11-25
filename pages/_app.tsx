import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        // TODO: Add more info for SEO
        defaultTitle="WinterJam"
        titleTemplate="%s | WinterJam 2021"
        openGraph={{
          type: "website",
          site_name: "WinterJam",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
