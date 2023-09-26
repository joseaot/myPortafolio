import { useCallback, useState, useEffect } from "react";
import style from "./Home.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import cv from "../../img/Jose Orellana full stack.pdf";
import perfil from "../../img/fotoperfil.jpg";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = perfil; // Ruta de la imagen
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);


  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className={style.contenedor} id="Home">
      <div className={style.overlay}>
        <h1 className={style.span}>Hola,</h1>
        <h1 className={style.span2}>Soy Jose Orellana</h1>
        <h1 className={style.span3}>Dev Full Stack</h1>

        <a
          href={cv} // Reemplaza con la ruta real a tu archivo CV
          download="Jose Orellana Cv.pdf" // Nombre del archivo que se descargará
          className={style.descargarBtn}
        >
          Descargar CV
        </a>
      </div>
      <a href="#Sobremi" className={style.arrowLink}>
        <svg className={style.arrows}>
          <path className={style.a1} d="M0 0 L30 32 L60 0"></path>
          <path className={style.a2} d="M0 20 L30 52 L60 20"></path>
          <path className={style.a3} d="M0 40 L30 72 L60 40"></path>
        </svg>
      </a>

      <div className={style.imagenContainer}>
        <div className={`${style.circleMask} ${imageLoaded ? style.fadeIn : ""}`}>
          <img src={perfil} alt="perfil" className={style.imagen} />
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={style.tamano}
        options={{
          background: {
            color: {
              value: "#231d1e",
            },
          },

          fullScreen: {
            enable: false,
            zIndex: -1,
          },

          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3.998400639744104,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Home;
