import style from "./Contactame.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactame = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    // Validar cada campo individualmente
    if (fieldName === "user_name") {
      if (!value.trim()) {
        newErrors.name = "El nombre es obligatorio";
      } else {
        delete newErrors.name;
      }
    }

    if (fieldName === "user_email") {
      if (!value.trim()) {
        newErrors.email = "El correo electrónico es obligatorio";
      } else {
        delete newErrors.email;
      }
    }

    if (fieldName === "message") {
      if (!value.trim()) {
        newErrors.message = "El mensaje es obligatorio";
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);

    // Verificar si no hay errores
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
  };

  const handleInputChange = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    // Realizar la validación directamente aquí
    const newErrors = {};
    if (!form.current.user_name.value.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }
    if (!form.current.user_email.value.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    }
    if (!form.current.message.value.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }
    setErrors(newErrors);
  
    // Verificar si no hay errores
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
  
    if (isValid) {
      try {
        const result = await emailjs.sendForm(
          "service_sy23jza",
          "template_2mflhze",
          form.current,
          "6HFgw4iKuIgh_mym2"
        );
  
        toast.success("¡El correo se ha enviado con éxito!"); // Mostrar notificación Toastify
        setIsSent(true);
        form.current.reset();
      } catch (error) {
        toast.error("Hubo un error al enviar el correo."); // Mostrar notificación de error Toastify
      }
    }
  };

  const handleSendAnotherEmail = () => {
    setIsSent(false); // Cambiar el estado a no enviado para permitir otro envío
  };

  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo} id="Contactame">
        Contactame
      </h1>
      <hr className={style.linea} />
      <div className={style.formulario}>
        {isSent ? (
          <div className={style.contenedor}>
            <p className={style.confirmationMessage}>
              ¡El correo se ha enviado con éxito!
            </p>
            <button
              onClick={handleSendAnotherEmail}
              className={style.submitButton2}
            >
              Enviar otro correo
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className={style.cajas}>
            <p className={style.titulo2}>Formulario de contacto</p>
            <div className={style.inputContainer}>
              <input
                type="text"
                name="user_name"
                placeholder="👤 Escriba su nombre"
                onChange={handleInputChange}
              />
              {errors.name && <div className={style.error}>{errors.name}</div>}
            </div>
            <div className={style.inputContainer}>
              <input
                type="email"
                name="user_email"
                placeholder="✉️ Escriba su email"
                onChange={handleInputChange}
              />
              {errors.email && (
                <div className={style.error}>{errors.email}</div>
              )}
            </div>
            <div className={style.inputContainer}>
              <textarea
                name="message"
                placeholder="📝 Escriba un mensaje"
                onChange={handleInputChange}
              />
              {errors.message && (
                <div className={style.error}>{errors.message}</div>
              )}
            </div>
            <div className={style.inputContainer}>
              <input
                type="submit"
                value="Enviar"
                disabled={!isFormValid}
                className={style.submitButton}
              />
            </div>
          </form>
        )}
      </div>
      <ToastContainer /> {/* Componente Toastify */}
    </div>
  );
};

export default Contactame;
