import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import ContentFadeIn from './small-components/ContentFadeIn';
import AboutContent from './presentational-components/AboutContent';



@inject('store')
@observer
class AboutMe extends React.Component {

  componentWillMount(){
    this.props.store.aboutMeStore.loadAbout();
    this.props.store.domainStore.unloadState();
  }
  componentWillUpdate(){
    if(this.props.store.aboutMeStore.aboutInfo.length > 0){this.props.store.domainStore.loadingState()}
  }

  //set timePeriodId to the clicked id
  loadTime = (id) => {
    this.props.store.aboutMeStore.timePeriodId = id.toString();
  }

  render() {
    const {aboutInfo, activeTimePeriod} = this.props.store.aboutMeStore;
    const {loading} = this.props.store.domainStore;
    const timelineInfo = aboutInfo.filter(info => (
      info.acf.category === 'timeline'
    ));
    const active = activeTimePeriod;
    const props = {aboutInfo, timelineInfo, active, loading};
    return(
      <div>
        <hgroup className="flex-container center column">
          <h2>a little about myself</h2>
        </hgroup>
        <br/>
        <ContentFadeIn in={!loading}>
          <AboutContent {...props} loadTime={this.loadTime}/>
        </ContentFadeIn>
      </div>
    );
  }

}

export default AboutMe;
