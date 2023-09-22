import Card from "../Card/Card.jsx";
import style from "./Proyectos.module.css";
import boda from "../../img/boda.png";
import ShoppConect from "../../img/shoppconect.png";
import CriptoCash from "../../img/CC.png";
import weatherapp from "../../img/logo.png";

const Proyectos = () => {
  const proyectos = [
    {
      img: boda,
      titulo: "Andres & Gaby",
      description:
        "Este proyecto es una aplicación de tarjeta de invitación diseñada específicamente para dispositivos móviles. Su propósito principal es permitir a los usuarios crear y personalizar tarjetas de invitación para eventos especiales, como bodas, fiestas de cumpleaños, reuniones familiares y más.",
      tecnologia: "React, Bootstrap, JavaScript",
      git: "https://github.com/joseaot/G-ABoda",
      deploy: "https://andresygaby.netlify.app/",
    },
    {
      img: ShoppConect,
      titulo: "ShopConnect",
      description:
        "Desarrollar un E-commerce de zapatos que incluyo: dashboard de administrador, baneo de usuarios, pasarela de pago con mercado pago, registro manual con encriptación de clave, envió de mail, al registrarse y al hacer el pago, filtros combinados, carrito de compra, guardar en favoritos, sección de usuarios donde visualizaban las compras y calificaban el producto.",
      tecnologia: "React, Redux, Axios, Node, Sequelize, PostgreSQL",
      git: "https://github.com/joseaot/ShopConnect-Front",
      deploy: "https://shopconnectt.onrender.com/",
    },
    {
      img: CriptoCash,
      titulo: "CriptoCash",
      description:
        "El proyecto es una aplicación web desarrollada utilizando React Vite, CSS y Styled Components. Su función principal es consumir una API para presentar a los usuarios el precio de diversas criptomonedas en relación con la moneda local de cada país. Los usuarios tienen la capacidad de elegir la criptomoneda y la moneda local de su preferencia. Una vez seleccionadas, la aplicación muestra de manera actualizada el precio de la criptomoneda en la moneda local elegida por el usuario.",
      tecnologia: "Web Services API, React, JavaScript",
      git: "https://github.com/joseaot/CryptoCash",
      deploy: "https://cryptocashjaot.netlify.app/",
    },
    {
      img: weatherapp,
      titulo: "WeatherApp",
      description:
        "WeatherApp es una aplicación de pronóstico del tiempo diseñada para brindarte información precisa y actualizada sobre las condiciones climáticas en tu ciudad y en todo el mundo. Con una interfaz intuitiva y datos confiables.",
      tecnologia: "React, Redux, Axios, Node, Sequelize, PostgreSQL",
      git: "https://github.com/joseaot/WeatherApp",
      deploy: "https://weatherappjaot.netlify.app/",
    },
  ];
  return (
    <div id="Proyectos" className={style.contenedor}>
      <h1 className={style.titulo}>Proyectos</h1>
      <hr className={style.linea} />

      <div className={style.cardsContainer}>
        {proyectos.map((proyecto, index) => (
          <Card
            key={index} // Asegúrate de proporcionar una clave única si tienes múltiples tarjetas
            img={proyecto.img}
            titulo={proyecto.titulo}
            description={proyecto.description}
            tecnologia={proyecto.tecnologia}
            git={proyecto.git}
            deploy={proyecto.deploy}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
