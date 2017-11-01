import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TweenLite} from 'gsap';

import LoadingPane from '../small-components/LoadingPane';

function imageFadeIn(){
  return TweenLite.to('.img-categories', 1.5,{opacity: 1, y: 20, delay: 2})
}

class PicCategory extends React.Component {


  loaded(){
    this.addAnimation(imageFadeIn);
  }

  render(props){
    const coloredUnderline = {
      backgroundColor: `rgba(223,171,28,1)`,
      borderColor: `rgba(223,171,28,1)`
    }
    return(
      <div className="hover-highlight">
        <hgroup className="flex-container column center">
          <h2>{this.props.title}</h2>
          <hr className="link-underline" style={coloredUnderline}/>
        </hgroup>
        {this.props.loading ? <LoadingPane/> :
        <img className="img-categories" src={this.props.image} alt= {this.props.title} onLoad={this.loaded.bind(this)}/>}
      </div>
    );
  }
}

export default GSAP()(PicCategory);
