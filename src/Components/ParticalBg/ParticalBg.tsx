import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function TParticles() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "-15",
        width: "100vw",
        height: "100vh",
        top: "0",
      }}
    >
      <Particles
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 0,

          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#071932",
            },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#071932" },
              polygon: { nb_sides: 5 },
              image: { src: "", width: 100, height: 100 },
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#071932",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            collisions: {
              enable: true,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: { opacity: 1 },
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 8,
                size: 40,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: { particles_nb: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
