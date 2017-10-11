import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import Header from './Header';
import TimelineBox from './presentational-components/TimelineBox';

@inject('store')
@observer
class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.props.store.aboutMeStore.loadTimeline();
  }
  render() {
    const {timelineInfo} = this.props.store.aboutMeStore;
    return(
      <div className="body-container">
        <Header />
        <hgroup className="flex-container center column">
          <h1>About Me</h1>
          <TimelineBox timeline={timelineInfo}/>
        </hgroup>
      </div>
    );
  }
}

export default AboutMe;
