import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/MenuDesktop";
import MenuMobile from "../../components/Header/MenuMobile";
import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contato() {
  return (
    <div>
      <Header />
      <MenuMobile />
      <ContactForm />
      <ButtonToTop />
      <Footer />
    </div>
  );
}

export default Contato;
