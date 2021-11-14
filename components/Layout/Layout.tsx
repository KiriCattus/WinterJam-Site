// import NavBar from "./NavBar";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import { NavBar } from "..";

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
  className,
  title,
  description,
  image,
  url,
}: Props) {
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
      <div className="min-h-screen h-full bg-winterjam">
        <NavBar />
        <main
          className={classNames(
            "px-2 md:px-8 md:pt-1 lg:w-3/4 lg:mx-auto",
            className
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
}
