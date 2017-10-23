import React from 'react';
import {NavLink} from 'react-router-dom';

const whiteUnderline = {
  backgroundColor: `white`,
  borderColor: `white`
}

const MobileMenu = (props) => (
    <div className={`mobile_menu-container ${props.isOpen ? 'menu-open' : 'menu-close'}`}>
      <ul>
      <li className="hover-highlight">
        <NavLink exact to="/">home</NavLink>
        <hr className='link-underline' style={whiteUnderline}/>
      </li>
      <li className="hover-highlight">
        <NavLink to="/photography">photography</NavLink>
        <hr className='link-underline' style={whiteUnderline}/>
      </li>
      <li className="hover-highlight">
        <NavLink to="/dev&design">development & design</NavLink>
        <hr className='link-underline' style={whiteUnderline}/>
      </li>
      <li className="hover-highlight">
        <NavLink to="/about">about me</NavLink>
        <hr className='link-underline' style={whiteUnderline}/>
      </li>
      </ul>
    </div>
)

export default MobileMenu;
