import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logoTerapia from "../../assets/logoTerapia.svg";
import instagram from "../../assets/Social-Logos/instagram.svg";
import facebook from "../../assets/Social-Logos/facebook.svg";
import twitter from "../../assets/Social-Logos/twitter.svg";
import whatsapp from "../../assets/Social-Logos/whatsapp.svg";

function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="footerMenu">
      <Link to="/">
        <img src={logoTerapia} className="footerMenu__logoFooter" alt="Brand logo" />
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
      <br />
      <div className="HorizontalLIne" />

      <div className="logosFooter">
        <a href="" target="_blank">
          <img src={instagram} className="socialLogo" alt="Instagram Logo" />
        </a>
        <a href="" target="_blank">
          <img src={facebook} className="socialLogo" alt="Facebook Logo" />
        </a>
        <a href="" target="_blank">
          <img src={twitter} className="socialLogo" alt="Twitter Logo" />
        </a>
        <a href="" target="_blank">
          <img src={whatsapp} className="socialLogo" alt="Whatsapp Logo" />
        </a>
      </div>

      <p className="copyRight">
        © {currentYear} Vinícius Almeida. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
