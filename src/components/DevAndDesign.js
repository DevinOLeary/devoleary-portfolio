import React from 'react';

//components
import Header from './Header';

class DevAndDesign extends React.Component {
  render() {
    return(
      <div className="body-container">
        <Header />
        <hgroup className="flex-container center column">
          <h1>Development and Design</h1>
          <h2>Examples</h2>
        </hgroup>
      </div>
    );
  }
}

export default DevAndDesign;
