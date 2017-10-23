import React from 'react';
import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';



class HomePage extends React.Component {
  render() {
    const banner = {
      backgroundImage: `url(${bannerImage})`,
      backgroundSize: `cover`
    }
    return(
      <div style={banner}>
        <header className="flex-container column space-between body-container">
          <hgroup className="flex-container center column text-inverse">
            <h1>Devin O&#8217;Leary</h1>
            <h3>Mindful Creations</h3>
          </hgroup>
          <Nav />
        </header>
      </div>
    );
  }
}

export default HomePage;
