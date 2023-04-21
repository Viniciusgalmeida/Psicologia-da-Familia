import React, { useState } from "react";
import "./styles.css";
import menuIcon from "../../assets/menuIcon.svg";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonMobileMenu">
        <img src={menuIcon} className="buttonMobileMenu__icon" />
      </button>
      {showDiv && (
        <div className="dropdownMenu">
          <nav className="dropdownMenu__list">
            <ul className="menuListMobile">
              <li className="dropdownMenu__list--page">
                <Link to="/">Home</Link>
              </li>

              <div className="horizontalLIne" />

              <li className="dropdownMenu__list--page">
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
