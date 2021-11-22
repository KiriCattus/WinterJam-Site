import React from "react";
import Particles from "react-tsparticles";
interface Props {
  animate: boolean;
  className?: string;
}

export function SnowParticles({ animate, className }: Props) {
  return (
    <Particles
      className={"particles bg-winterjam z-0" + className}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 60,
        particles: {
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 500,
            opacity: 0.4,
            width: 2,
          },
          move: animate
            ? {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "bottom",
                enable: true,
                outModes: {
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                  default: "out",
                },
              }
            : {},
          number: {
            density: {
              enable: true,
            },
            value: 400,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0.05,
              max: 0.1,
            },
            animation: {
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 1,
              max: 10,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
      }}
    />
  );
}
