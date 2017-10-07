import React from 'react';
import {Route} from 'react-router-dom';


//components
import Photography from './Photography';
import HomePage from './HomePage';
import DevAndDesign from './DevAndDesign';
import AboutMe from './AboutMe';
import Footer from './Footer';


class Main extends React.Component{

  render() {

    return (
        <div className="body-container">
            <Route path="/" exact component={HomePage}/>
            <Route path="/photography" component={Photography}/>
            <Route path="/dev&design" component={DevAndDesign}/>
            <Route path="/about" component={AboutMe}/>
            <Footer />
        </div>
    );

    }
  }

export default Main;
