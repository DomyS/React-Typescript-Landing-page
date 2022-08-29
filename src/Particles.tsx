import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Canvas = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#2D3047",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              quantity: 3,
            },
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#FFC65C",
          },
          links: {
            color: "#FFC65C",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Canvas;
