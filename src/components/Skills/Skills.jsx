import style from "./Skills.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { DiNodejsSmall } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  const soft = [
    { id: 1, text: "Manejo de crisis" },
    { id: 2, text: "Resiliencia" },
    { id: 3, text: "Responsabilidad" },
    { id: 4, text: "Sociabilidad" },
    { id: 5, text: "Curiosidad" },
    { id: 6, text: "Colaboración" },
    { id: 7, text: "Adaptabilidad" },
    { id: 8, text: "Aprendizaje ágil" },
    { id: 9, text: "Automotivación" },
    { id: 10, text: "Liderazgo" },
    { id: 11, text: "Pensamiento lógico" },
  ];

  const tech = [
    { img: <DiJavascript1 className={style.icono}/>, text: "JavaScript" },
    { img: <DiReact className={style.icono}/>, text: "React" },
    { img: <TbBrandRedux className={style.icono}/>, text: "Redux" },
    { img: <DiNodejsSmall className={style.icono}/>, text: "NodeJs" },
    { img: <SiSequelize className={style.icono}/>, text: "Sequelize" },
    { img: <SiMysql className={style.icono}/>, text: "MySQL" },
    { img: <BsGit className={style.icono}/>, text: "Git" },
    { img: <TbBrandNextjs className={style.icono}/>, text: "NexJs" },
    { img: <BiLogoPostgresql className={style.icono}/>, text: "Postgresql" },
  ];

  const softColumn1 = soft.slice(0, Math.ceil(soft.length / 2));
  const softColumn2 = soft.slice(Math.ceil(soft.length / 2));
  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo} id="Skills">Skills</h1>
      <hr className={style.linea}/>

      <h3 className={style.subtitulo}>Soft</h3>
      <div className={style.lista}>
        <div className={style.column}>
          <ul>
            {softColumn1.map((soft) => (
              <li key={soft.id} className={style.letras}>
                <BsPatchCheckFill className={style.logo} />
                {soft.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.column}>
          <ul>
            {softColumn2.map((soft) => (
              <li key={soft.id} className={style.letras}>
                <BsPatchCheckFill className={style.logo} />
                {soft.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={style.subtitulo}>Tech</h3>
      <div className={style.habilidades}>
        {tech.map((techSkill) => (
          <div key={techSkill.text} className={style.habilidad}>
            <div className={style.icono}>
            {techSkill.img} {/* Aquí renderizamos el icono */}
            </div>
            <div className={style.divTexto}>
              <span className={style.texto}>{techSkill.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
