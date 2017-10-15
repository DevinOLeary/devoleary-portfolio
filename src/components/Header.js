import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return(
    <div>
      <header className="header-subpage flex-container center">
        <nav className="full-width">
          <ul className="nav-bar flex-container">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/photography">photography</NavLink></li>
            <li><NavLink to="/dev&design">development & design</NavLink></li>
            <li><NavLink to="/about">about me</NavLink></li>
          </ul>
        </nav>
      </header>
      <hr className="divider-colored"/>
      <br/>
    </div>
  );
}

export default Header;
