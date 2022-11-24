import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import { useMemo, useCallback } from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {},
      fullScreen: {
        enable: true,
        zIndex: 9,
      },

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#ff5f6d",
        },
        links: {
          color: "#ffc371",
          enable: true,
          distance: 100,
          width: 1,
        },
        move: {
          direction: "right",
          enable: true,
          speed: { min: 1, max: 12 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        number: {
          value: 100,
        },

        shape: {
          type: "polygon",
        },
      },
      responsive: [
        {
          maxWidth: 426,
          options: {
            particles: {
              number: {
                value: 10,
              },
            },
          },
        },
        {
          maxWidth: 550,
          options: {
            particles: {
              number: {
                value: 15,
              },
            },
          },
        },
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 35,
              },
            },
          },
        },
        {
          maxWidth: 1024,
          options: {
            particles: {
              number: {
                value: 50,
              },
            },
          },
        },
      ],
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
