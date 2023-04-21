import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logoTerapia from "../../assets/logoTerapia.svg";

export default function Header() {
  return (
    <header className="menuDesktop">
      <div className="menuDesktop__itens">
        <Link to="/">
          <img src={logoTerapia} className="menuDesktop__itens--logoTerapia" alt="Brand logo" />
        </Link>
        

        <nav>
          <ul className="menuDesktop__itens--list">
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
