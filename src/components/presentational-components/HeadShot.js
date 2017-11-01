import React from 'react';
import {TweenLite} from 'gsap';
import GSAP from 'react-gsap-enhancer';


function fadeInHeadShot(){
  let pic = '#headShot';
  return TweenLite.to(pic, 2, {  opacity: 1, y: 30, delay: 1});
}

class HeadShot extends React.Component {

  headShotLoaded(){
    this.addAnimation(fadeInHeadShot);
  }
  render(props){
    const headshot = this.props.aboutInfo.find(info => (
      info.acf.category ===  'headshot'
    ));
    return(
      <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
      alt={headshot.acf.category}
      className="headshot" id="headShot" onLoad={this.headShotLoaded.bind(this)}/>
    );
  }
}

export default GSAP()(HeadShot);
