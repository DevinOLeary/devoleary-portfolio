import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import AboutContent from './presentational-components/AboutContent';
import animations from './small-components/animations';




@inject('store')
@observer
class AboutMe extends React.Component {


  componentWillMount(){
    this.props.store.aboutMeStore.loadAbout();
  }


  //set timePeriodId to the clicked id
  loadTime = (id) => {
    this.props.store.aboutMeStore.loadNewTimePeriod(id);
  }
  loadPic = (e) => {
    animations.fadeInDown(e.target);
  }

  render() {
    const {aboutInfo, activeTimePeriod, loading, timePeriodId} = this.props.store.aboutMeStore;
    const timelineInfo = aboutInfo.filter(info => (
      info.acf.category === 'timeline'
    ));
    const active = activeTimePeriod;
    const props = {aboutInfo, timelineInfo, active, loading, timePeriodId};
    return(
      <div>
        <hgroup className="flex-container center column">
          <h2>a little about myself</h2>
        </hgroup>
        <br/>
        <AboutContent {...props} loadTime={this.loadTime} loadPic={this.loadPic}/>
      </div>
    );
  }

}

export default AboutMe;
