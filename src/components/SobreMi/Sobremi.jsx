import style from "./Sobremi.module.css";
import equipo from "../../img/sobremi.png";

const Sobremi = () => {
  return (
    <div className={style.contenedor}>
      <h1 id="Sobremi" className={style.titulo}>
        Sobre Mi
      </h1>
      <hr className={style.linea} />
      <div className={style.contenedor2}>
        <img src={equipo} alt="equipo" className={style.imagen} />
        <p className={style.parrafo}>
          En mi búsqueda constante de crecimiento y excelencia como
          desarrollador de software, disfruto colaborar con equipos para
          resolver desafíos complejos. Mi pasión radica en la creación de
          soluciones elegantes y amigables con la ayuda de tecnologías de
          vanguardia en el front-end y el back-end. Mi compromiso incluye el
          aprendizaje constante de nuevas tecnologías, como Typescript y Python,
          con el objetivo de ser un desarrollador versátil y contribuir
          plenamente en el ciclo de vida del desarrollo de software. Más allá de
          mis habilidades técnicas, mi fluidez en varios idiomas, que incluye
          español, portugués y un creciente dominio del inglés, me permite
          trabajar eficazmente en equipos multilingües y entregar soluciones de
          alta calidad. Mi enfoque principal es aportar lo mejor de mí tanto a
          nivel personal como profesional, beneficiando tanto a mí mismo como a
          la empresa en la que me encuentre.
        </p>
      </div>
    </div>
  );
};

export default Sobremi;
