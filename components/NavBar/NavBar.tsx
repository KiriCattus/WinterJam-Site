import Link from "next/link";
import React, { useState } from "react";
import { Title } from "..";

function NavLink({
  title,
  location,
  classNames = "",
  target = "_blank",
  inline = false,
}: {
  title: string;
  location: string;
  classNames?: string;
  target?: string;
  inline?: boolean;
}) {
  const classes: string =
    "hover:underline " + (inline ? "inline " : "block ") + classNames;

  if (location.startsWith("http") || location.startsWith("#")) {
    return (
      <a
        className={classes}
        href={location}
        target={target}
        rel={`noopener noreferrer`}
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={location}>
      <a className={classes}>{title}</a>
    </Link>
  );
}

export function NavBar({ className = "" }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className={"text-primary w-full " + className}>
      <div className="hidden lg:grid sm:grid-cols-3 w-full px-16 py-4">
        <div className="flex px-4 gap-x-6 text-xl font-bold items-center">
          <NavLink classNames="my-auto" title="Home" location="/" />
          <NavLink classNames="my-auto" title="Rules" location="/rules" />
          <NavLink classNames="my-auto" title="FAQ" location="/faq" />
          <NavLink
            classNames="my-auto"
            title="Discord"
            location="https://discord.tophatcat.dev/"
          />
        </div>
        <div className="flex items-center justify-center">
          <Title />
        </div>
        <div className="flex ml-auto px-4 gap-x-6 text-xl font-bold">
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-3 px-4">
          <Title icicles={false} />
          <svg
            className="w-9 h-9 text-primary border-2 rounded-lg border-primary"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setExpanded(!expanded)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {expanded && (
          <div className={`py-1 font-bold text-center bg-secondary`}>
            <NavLink title="Home" location="/" />
            <NavLink title="Rules" location="/rules" />
            <NavLink title="FAQ" location="/faq" />
            <NavLink title="Discord" location="https://discord.tophatcat.dev/" />
          </div>
        )}
      </div>
    </nav>
  );
}
