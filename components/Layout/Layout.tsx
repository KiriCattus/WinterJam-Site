// import NavBar from "./NavBar";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { NavBar, SnowParticles } from "..";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function Layout({
  children,
  className = "",
  title,
  description,
  image,
  url,
}: Props) {
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          title: title,
          url: `https://winterjam.mcmoddev.com${url || "/"}`,
          description: description,
          images: [
            {
              url: image || "https://winterjam.mcmoddev.com/logo/badge.png",
              alt: title + " logo",
            },
          ],
          site_name: "Winterjam",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="min-h-screen h-full">
        <SnowParticles
          animate={isSnowing}
          className="min-h-plus inset-0 z-0 md:block fixed"
        />
        <NavBar
          onSnowToggle={() => {
            setIsSnowing((prev) => !prev);
          }}
          className="z-10 my-2"
        />
        <main
          className={
            "h-full p-2 mx-2 md:px-8 lg:w-3/4 lg:mx-auto bg- bg-opacity-25 rounded-3xl mb-5 " +
            className
          }
        >
          {children}
        </main>
      </div>
    </>
  );
}
