import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const ContactForm = () => {
  const form = useRef();
  const focusOnInput = { username: false, email: false, message: false };
  const [focus, setFocus] = useState(focusOnInput);

  const initialValues = { username: "", email: "", message: "", send: "Envoyer" };
  const [formValues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIssubmit(false);
      const ResetValues = { username: "", email: "", message: "", send: "Bien reçu, Merci!" };
      setFormvalues(ResetValues);

      // emailjs
      //   .sendForm(
      //     `${process.env.REACT_APP_SECRET_ID}`,
      //     `${process.env.REACT_APP_TEMPLATE_ID}`,
      //     form.current,
      //     `${process.env.REACT_APP_PUBLIC_KEY}`
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const nameregex =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Veuillez indiquer votre nom";
    } else if (!nameregex.test(values.username)) {
      errors.username = "Veuillez indiquer un nom valide";
    } else if (values.username.length < 2) {
      errors.username = "2 caractères ou plus ";
    } else if (values.username.length > 30) {
      errors.username = "30 caractères maximum";
    }
    if (!values.email) {
      errors.email = "Veuillez indiquer votre email";
    } else if (!emailregex.test(values.email)) {
      errors.email = "Email invalide";
    }
    if (!values.message) {
      errors.message = "Veuillez rédiger votre message";
    } else if (values.message.length > 400) {
      errors.message = "400 caractères maximum";
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIssubmit(true);
  };

  return (
    <div className="form-container">
      <div className="title-wrapper">
        <p>
          Un projet ?
          <br />
          Un besoin de developpeur ?
        </p>
        <h2>Contactez moi</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="text-field">
          <input
            type="text"
            name="user_name"
            value={formValues.username}
            onChange={(e) => setFormvalues({ ...formValues, username: e.target.value, send: "Envoyer" })}
            onFocus={() => setFocus({ ...focus, username: true })}
            onBlur={() => setFocus({ ...focus, username: false })}
          />
          <label className={formValues.username !== "" || focus.username === true ? "input-active" : "input-inactive"}>
            Nom
          </label>
          <span
            className={
              formValues.username !== "" || focus.username === true ? "input-underline-active" : "input-underline"
            }></span>
        </div>
        <p>{formErrors.username}</p>
        <div className="text-field">
          <input
            type="text"
            name="user_email"
            value={formValues.email}
            onChange={(e) => setFormvalues({ ...formValues, email: e.target.value, send: "Envoyer" })}
            onFocus={() => setFocus({ ...focus, email: true })}
            onBlur={() => setFocus({ ...focus, email: false })}
          />
          <label className={formValues.email !== "" || focus.email === true ? "input-active" : "input-inactive"}>
            Email
          </label>
          <span
            className={
              formValues.email !== "" || focus.email === true ? "input-underline-active" : "input-underline"
            }></span>
        </div>
        <p>{formErrors.email}</p>
        <div className="text-field">
          <textarea
            name="message"
            value={formValues.message}
            onChange={(e) => setFormvalues({ ...formValues, message: e.target.value, send: "Envoyer" })}
            onFocus={() => setFocus({ ...focus, message: true })}
            onBlur={() => setFocus({ ...focus, message: false })}
          />
          <label className={formValues.message !== "" || focus.message === true ? "textaera-active" : "input-inactive"}>
            Message
          </label>
          <span
            className={
              formValues.message !== "" || focus.message === true ? "textaera-underline-active" : "textaera-underline"
            }></span>
        </div>
        <p>{formErrors.message}</p>
        <input type="submit" value={formValues.send} />
      </form>
    </div>
  );
};
export default ContactForm;
