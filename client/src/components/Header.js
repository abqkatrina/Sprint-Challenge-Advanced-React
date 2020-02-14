import React from 'react';
import useDarkMode from '../hooks/useDarkMode';



const Header = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Women's World Cup Stars</h1>
      <img src={'img/fifa_logo.png'} alt={'fifa logo'}/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Header;