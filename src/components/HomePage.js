import React from 'react';
import {TweenLite, TimelineLite} from 'gsap';
import GSAP from 'react-gsap-enhancer';

import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';
import LoadingPane from './small-components/LoadingPane';

function titleFadeIn(){
  return (
    TweenLite.fromTo('#titleName', 1.5, {opacity: 0, y: 0},{opacity: 1, y: 40, delay: 1}),
    TweenLite.fromTo('#titleQuote', 1.5, {opacity: 0, y: 0}, {opacity: 1, y: 50, delay: 1.3})
  );

}

function firstBoxDrawAnimation(){
  let tl = new TimelineLite();
  TweenLite.set("#box", {visibility: "visible"})
    return tl.fromTo(".l1", 1, {height:0}, {height:238, ease:"Power1.easeIn", delay: .5})
    .fromTo(".l4", 3, {width:0}, {width:'150%',ease: "Power1.easeOut"})

};
function secondBoxDrawAnimation(){
  let tl = new TimelineLite();
  return tl.fromTo(".l2", 4, {width:0}, {width:'150%', ease:"Power1.easeInOut" , delay: .5})
};

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  loaded(){
    this.setState({loading: false});
    this.addAnimation(firstBoxDrawAnimation);
    this.addAnimation(secondBoxDrawAnimation);
    this.addAnimation(titleFadeIn);
    }

  render() {
    let isLoading = this.state.loading;
    if(isLoading){return (
      <div>
        <LoadingPane/>
        <img src={bannerImage} alt="homepage" className="img-full_banner hidden" onLoad={this.loaded.bind(this)}/>
      </div>
    )
      }else{
      return(
        <div>
          <div className="overlay-home_banner">
          </div>
          <img src={bannerImage} alt="homepage" className="img-full_banner"/>
          <header className="flex-container column space-between homepage-container">
            <hgroup className="flex-container center column text-inverse">
              <div className="title-box">
                <span className="l1"></span>
                <span className="l2"></span>
                <span className="l3"></span>
                <span className="l4"></span>
                <h1 id="titleName">Devin O&#8217;Leary</h1>
                <h4 id="titleQuote">creating authentic solutions for the web</h4>
              </div>
            </hgroup>
            <Nav />
          </header>
        </div>
      );
    }
  }
}

export default GSAP()(HomePage);
