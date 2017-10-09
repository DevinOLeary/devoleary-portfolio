import React from 'react';

//components
import Header from './Header';

class AboutMe extends React.Component {
  render() {
    return(
      <div className="body-container">
        <Header />
        <hgroup className="flex-container center">
          <h1>About Me</h1>
        </hgroup>
      </div>
    );
  }
}

export default AboutMe;
