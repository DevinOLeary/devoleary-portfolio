import React from 'react';


const Footer = () => {
  return(
    <footer className="footer-container flex-container center column text-inverse">
      <h3>get in touch</h3>
      <a href="mailto:djoleary07@gmail.com">email</a>
      <br/>
      <ul className="flex-container row center">
        <li>insta</li>
        <br/>
        <li>github</li>
      </ul>
      <br/>
      <hr className="divider-colored"/>
      <br/>
      <h4>Bloomington, IN</h4>
    </footer>

  );
}

export default Footer;
