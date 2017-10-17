import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
      <nav>
        <ul className="flex-container nav-bar row">
          <li><NavLink to="/photography">Photography</NavLink></li>
          <li><NavLink to="/dev&design">Development & Design</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;
