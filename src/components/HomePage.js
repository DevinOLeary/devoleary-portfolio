import React from 'react';

import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';
import LoadingPane from './small-components/LoadingPane';
import animations from './small-components/animations';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      img: {opacity: 0}
    }
  }

  loaded(){
    this.setState({loading: false, img: {opacity: 1}});

    setTimeout(() => {
      this.animate();
    },500);
  }

  animate(){

      const titleName = this.titleName;

      animations.titleFadeIn(titleName, 1.5);



      // animations.firstBoxDrawAnimation(l1,l3);
      // animations.secondBoxDrawAnimation(l2);

      // animations.titleFadeIn(titleQuote, 2);

  }

  render() {
    let isLoading = this.state.loading;

    if(isLoading){return (
      <div>
        <LoadingPane/>
        <img src={bannerImage} alt="homepage" className="img-full_banner" style={this.state.img} onLoad={this.loaded.bind(this)}/>
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
              <span ref={(ref) => {this.lineOne = ref}}></span>
              <span id="lineTwo"></span>
              <span id="lineThree"></span>
              <h1 ref={(ref) => {this.titleName = ref}}>Devin O&#8217;Leary</h1>
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

export default HomePage;
