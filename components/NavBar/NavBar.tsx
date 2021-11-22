import React, { useState } from "react";
import Link from "next/link";
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

interface Props {
  onSnowToggle?: () => void;
  className?: string;
}

export function NavBar({ onSnowToggle, className = "" }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className={"text-white w-full " + className}>
      <div className="hidden lg:grid sm:grid-cols-3 w-full px-16 py-4">
        <div className="flex px-4 gap-x-6 text-xl font-bold items-center">
          <div className="cursor-pointer" onClick={onSnowToggle}>
            ❄️
          </div>
          <NavLink classNames="my-auto" title="Home" location="/" />
          <NavLink
            classNames="my-auto"
            title="Submissions"
            location="/submissions"
          />
        </div>
        <div className="flex items-center justify-center">
          <Title />
        </div>
        <div className="flex ml-auto px-4 gap-x-6 text-xl font-bold">
          <NavLink
            classNames="my-auto"
            title="GitHub"
            location="https://github.com/MinecraftModDevelopmentMods"
          />
          <NavLink
            classNames="my-auto"
            title="Twitter"
            location="https://twitter.com/mcmoddev"
          />
          <NavLink
            classNames="my-auto"
            title="Discord"
            location="https://discord.mcmoddev.com/"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-3 px-4">
          <Title icicles={false} />
          <svg
            className="w-9 h-9 text-white border-2 rounded-lg border-white"
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
          <div className={`py-1 font-bold text-center bg-gray-800`}>
            <NavLink title="Home" location="/" />
            <NavLink title="Submissions" location="/submissions" />
            <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
            <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
            <NavLink
              title="GitHub"
              location="https://github.com/MinecraftModDevelopmentMods"
            />
            <div className="cursor-pointer py-2" onClick={onSnowToggle}>
              ❄️
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
