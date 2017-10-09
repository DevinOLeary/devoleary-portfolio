import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return(
    <header className="header-subpage flex-container center">
      <nav className="full-width">
        <ul className="nav-bar flex-container">
          <li className="text-inverse"><NavLink to="/">Home</NavLink></li>
          <li className="text-inverse"><NavLink to="/photography">Photography</NavLink></li>
          <li className="text-inverse"><NavLink to="/dev&design">Development & Design</NavLink></li>
          <li className="text-inverse"><NavLink to="/about">About Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
