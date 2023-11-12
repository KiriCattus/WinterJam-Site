import classNames from "classnames";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
interface Props {
  animate: boolean;
  className?: string;
}

export function SnowParticles({ animate, className }: Props) {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);


  return (
    <Particles
      className={classNames("particles bg-winterjam z-0", className)}
      init={particlesInit}
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
