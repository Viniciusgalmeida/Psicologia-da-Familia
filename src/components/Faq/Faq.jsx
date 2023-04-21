import React from "react";
import AccordionMenu from "./AccordionMenu";
import "./style.css";

function Faq() {
  return (
    <div >
      <div className="faq">
        <h1 className="depoimento__Title">PERGUNTAS FREQUENTES</h1>
        <AccordionMenu />
      </div>
    </div>
  );
}

export default Faq;
