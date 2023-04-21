import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // aqui você pode enviar os dados para um servidor ou API
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formContainer">
        <h1 className="formContainer__title">CONTATO</h1>
        <label htmlFor="name" className="formContainer__text">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="formContainer__input"
        />

        <label htmlFor="email" className="formContainer__text">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="formContainer__input"
        />

        <label htmlFor="phone" className="formContainer__text">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="formContainer__input"
        />

        <label htmlFor="comments" className="formContainer__text">Comentários:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
          className="formContainer__inputComments"
        />

        <button type="submit" className="formContainer__button">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
