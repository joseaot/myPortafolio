import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import style from "./Foot.module.css";

const Foot = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className={style.text}>&copy; 2023 Dev. Jose Orellana</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted text-center d-block"
              href="https://www.instagram.com/joseaot/"
            >
              <svg className="bi" width="34" height="34"></svg>
              <AiOutlineInstagram className={style.icono} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted text-center d-block"
              href="https://www.facebook.com/josealberto.orellana.5"
            >
              <svg className="bi" width="34" height="34"></svg>
              <FaFacebookSquare className={style.icono} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted text-center d-block"
              href="https://www.linkedin.com/in/joseorellanaot/"
            >
              <svg className="bi" width="34" height="34"></svg>
              <FaLinkedin className={style.icono} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Foot;
