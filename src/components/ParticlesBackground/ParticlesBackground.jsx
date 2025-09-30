import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useColorModeValue } from "@chakra-ui/react";

const ParticlesBackground = () => {
  const particleColor = useColorModeValue("#3379b5", "#fffb1c");
  const lineColor = useColorModeValue("#3379b5", "#fffb1c");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: particleColor,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: {
            enable: true,
            minimumValue: 1,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: lineColor,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: true,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.4,
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    [particleColor, lineColor]
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;

