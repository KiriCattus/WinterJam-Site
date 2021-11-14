import React from "react";
import Particles from "react-tsparticles";

export function SnowParticles() {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        fullScreen: {
          zIndex: 1,
        },
        particles: {
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 500,
            opacity: 0.4,
            width: 2,
          },
          move: {
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
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 400,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
            animation: {
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              enable: true,
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
