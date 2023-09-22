import style from './Card.module.css';
import { BsGithub } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { useState } from 'react'; // Importa useState desde React

const Card = (prop) => {
  const cardStyle = {
    width: "18rem",
    margin: '10px',
    background: '#231d1e',
  };

  const textStyle = {
    color: 'rgb(230, 230, 230)',
  };

  const [showMore, setShowMore] = useState(false); // Estado para controlar la visibilidad del contenido adicional

  const toggleShowMore = () => {
    setShowMore(!showMore); // Cambia el estado cuando se hace clic en el botón "Ver más"
  };

  return (
    <div className="card" style={cardStyle}>
      <img className="card-img-top" src={prop.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" style={textStyle}>{prop.titulo}</h5>
        <p className="card-text" style={textStyle}>
          {showMore ? prop.description : `${prop.description.slice(0, 150)}...`} {/* Muestra solo una parte del texto si showMore es false */}
        </p>
        {prop.description.length > 100 && (
          <button onClick={toggleShowMore} className={style.verMasButton}>
            {showMore ? 'Ver menos' : 'Ver más'}
          </button>
        )}
        <p className="card-text" style={textStyle}>
          Tecnologias: {prop.tecnologia}
        </p>
        <div className={style.botones}>
          <a href={prop.git} className={style.verMasButton}>
            <BsGithub />
          </a>
          <a href={prop.deploy} className={style.verMasButton}>
            <BsFillEyeFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
