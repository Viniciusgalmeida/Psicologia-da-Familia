import React, { useState, useEffect } from 'react';
import upButton from '../../assets/upButton.svg'
import './styles.css'


function ButtonToTop() {
  const [showButton, setShowButton] = useState(false);

  // Use o hook useEffect para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Renderize o botão somente se showButton for true */}
      {showButton && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='tagButton'>
          <img src={upButton} className="upButton" alt="Button to top" />
        </button>
      )}

      {/* Resto do conteúdo da página */}
    </div>
  );
}

export default ButtonToTop;
