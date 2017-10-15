import React from 'react';


const Footer = () => {
  return(
    <footer className="footer-container flex-container center text-inverse">
      <div className="flex-container row center">
        <form className="flex-container column center">
          <div>
            <label htmlFor="contact name">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="contact email">Email</label>
            <input type="text"/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="textbox" rows="8"/>
          </div>
          <button className="button-action">Submit</button>
        </form>
        <ul>
          <li>Bloomington, IN</li>
          <hr className="divider-colored"/>
          <li>social media</li>
        </ul>
      </div>
    </footer>

  );
}

export default Footer;
