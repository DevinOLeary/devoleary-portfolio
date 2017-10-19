import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
      <nav>
        <ul className="flex-container nav-bar row">
          <li>
            <NavLink to="/photography">Photography</NavLink>
            <hr className='link-underline'/>
          </li>
          <li>
            <NavLink to="/dev&design">Development & Design</NavLink>
            <hr className='link-underline'/>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
            <hr className='link-underline'/>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
