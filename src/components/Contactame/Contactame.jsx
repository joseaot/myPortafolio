import style from "./Contactame.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactame = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sy23jza', 'template_2mflhze', form.current, '6HFgw4iKuIgh_mym2')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    };
  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo} id="Contactame">
        Contactame
      </h1>
      <hr className={style.linea} />
      <div className={style.formulario}>
      <form ref={form} onSubmit={sendEmail} className={style.cajas}>
        <label className={style.letras}>Name</label>
        <input type="text" name="user_name" />
        <label className={style.letras}>Email</label>
        <input type="email" name="user_email" />
        <label className={style.letras}>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    </div>
  );
};

export default Contactame;
