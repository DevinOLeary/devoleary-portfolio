import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import Header from './Header';
import TimelineBox from './presentational-components/TimelineBox';
import TimelineHeader from './presentational-components/TimelineHeader';


@inject('store')
@observer
class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.props.store.aboutMeStore.loadTimeline();
  }


  loadTime = (id) => {
    this.props.store.aboutMeStore.timePeriodId = id.toString();
  }
  
  render() {
    const {timelineInfo, timePeriodId, activeTimePeriod} = this.props.store.aboutMeStore;
    const props = {timelineInfo, timePeriodId, activeTimePeriod};
    return(
      <div className="body-container">
        <Header />
        <hgroup className="flex-container center column">
          <h1>About Me</h1>
        </hgroup>
        <table className="flex-container center column">
          <TimelineHeader {...props} loadTime={this.loadTime}/>
          <TimelineBox {...props}/>
        </table>
      </div>
    );
  }
}

export default AboutMe;
