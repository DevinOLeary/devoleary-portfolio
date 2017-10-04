import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return(
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/photography">Photography</NavLink></li>
          <li><NavLink to="/dev&design">Development & Design</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
