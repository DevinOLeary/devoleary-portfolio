import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'



//components
import Photography from './Photography';
import HomePage from './HomePage';
import DevAndDesign from './DevAndDesign';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';


const Main = withRouter(({location}) => (
  <div>
    {location.pathname !== "/" && <Header/>}
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={1200}>
          <Switch location={location}>
              <Route path="/" exact component={HomePage}/>
              <Route path="/photography" component={Photography}/>
              <Route path="/dev&design" component={DevAndDesign}/>
              <Route path="/about" component={AboutMe}/>
          </Switch>
      </CSSTransition>
    </TransitionGroup>
    {location.pathname !== "/" && <Footer />}
  </div>
));








export default Main;
