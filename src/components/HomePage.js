import React from 'react';
import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';

import LoadingPane from './small-components/LoadingPane';



class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  loaded(){
    this.setState({loading: false});
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
          <img src={bannerImage} alt="homepage" className="img-full_banner"/>
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
}

export default HomePage;
