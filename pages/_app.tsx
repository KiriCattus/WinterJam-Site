import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="WinterJam 2021"
        description="An annual event hosted by MMD in celebration of the chilly winter season!"
        canonical="https://winterjam.mcmoddev.com"
        openGraph={{
          url: "https://winterjam.mcmoddev.com",
          title: "WinterJam",
          description: "An annual event hosted by MMD in celebration of the chilly winter season!",
          site_name: "WinterJam 2021",
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
        twitter={{
          handle: "@McModDev",
          cardType: 'summary_large_image',
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
