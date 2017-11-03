import React from 'react';
import animations from '../small-components/animations';




class HeadShot extends React.Component {

  loadPic(e){
    animations.fadeIn(e.target);
  }
  render(props){
    const headshot = this.props.aboutInfo.find(info => (
      info.acf.category ===  'headshot'
    ));
    return(
      <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
      alt={headshot.acf.category}
      className="headshot" onLoad={this.loadPic.bind(this)}/>
    );
  }
}

export default (HeadShot);
