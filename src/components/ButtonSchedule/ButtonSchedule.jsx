import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ButtonSchedule() {
  return (
    <a className="linkToContato" href="/contato">

      <button className="buttonSchedule">AGENDE UMA CONSULTA ONLINE</button>
    </a>
    
  );
}

export default ButtonSchedule;
