import dynamic from "next/dynamic";
import React from "react";

export const DateRendererLoader = dynamic(() => import("./DateRenderer"), {
  ssr: false,
  loading: () => {
    return <div className={`animate-pulse h-7 w-full bg-secondary rounded`} />;
  },
});

export const CountdownRendererLoader = dynamic(
  () => import("./CountdownRenderer"),
  {
    ssr: false,
    loading: () => {
      return <div className={`animate-pulse h-7 w-full bg-secondary rounded`} />;
    },
  }
);
