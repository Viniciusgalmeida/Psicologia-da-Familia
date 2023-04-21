import "./styles.css";
import { Link } from "react-router-dom";

import logoTerapia from "../../assets/logoTerapia.svg";
import "./styles.css";
// import logoSuit from "../../assets/logoSuit.svg";

import React from "react";
import DropdownMenu from "./DropdownMenu";

function MenuMobile() {
  return (
    <footer className="menuMobile">
      <Link to="/">
        <img src={logoTerapia} className="menuMobile__logoTerapia" alt="Brand logo" />
      </Link>
      <DropdownMenu />
    </footer>
  );
}

export default MenuMobile;
