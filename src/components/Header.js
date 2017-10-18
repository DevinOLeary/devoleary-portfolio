import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return(
    <div>
      <header className="header-subpage flex-container center">
        <nav className="full-width">
          <ul className="nav-bar flex-container">
            <li>
              <NavLink exact to="/">home</NavLink>
              <hr className='link-underline'/>
            </li>
            <li>
              <NavLink to="/photography">photography</NavLink>
              <hr className='link-underline'/>
            </li>
            <li>
              <NavLink to="/dev&design">development & design</NavLink>
              <hr className='link-underline'/>
            </li>
            <li>
              <NavLink to="/about">about me</NavLink>
              <hr className='link-underline'/>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="divider-colored"/>
      <br/>
    </div>
  );
}

export default Header;
