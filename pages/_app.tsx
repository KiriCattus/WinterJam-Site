import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="WinterJam 2022"
        description="An annual event in celebration of the chilly winter season!"
        canonical="https://winterjam.tophatcat.dev"
        openGraph={{
          url: "https://winterjam.tophatcat.dev",
          title: "WinterJam",
          description: "An annual event in celebration of the chilly winter season!",
          site_name: "WinterJam 2022",
          images: [
            {
              // TODO: Fix missing image in embeds.
              url: "/mmd_winter.png",
              width: 400,
              height: 400,
              alt: "WinterJam Logo"
            }
          ]
        }}
        additionalMetaTags={[
          {
              name: 'theme-color',
              content: '#a16207'
          }
      ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
