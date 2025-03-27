import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticleDesign = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -1 
      },
      background: {
        color: {
          value: "none",
        }
      },
      fpsLimit: 150,
      interactivity: {
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 180,
        },
        opacity: {
          value: 1.5,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="absolute inset-0 z-0">
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticleDesign;
