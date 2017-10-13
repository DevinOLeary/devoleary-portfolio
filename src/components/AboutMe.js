import React from 'react';
import {inject, observer} from 'mobx-react';
import {TransitionGroup} from 'react-transition-group';

//components
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
    const {timelineInfo, activeTimePeriod} = this.props.store.aboutMeStore;
    const props = {timelineInfo};
    const active = activeTimePeriod;
    return(
      <div className="body-container">
        <hgroup className="flex-container center column">
          <h1>About Me</h1>
        </hgroup>
        <table className="flex-container center column">
          <TimelineHeader {...props} loadTime={this.loadTime}/>
          <TimelineBox {...props}>
            {timelineInfo > 0 &&
            active > 0 &&
            <article>
              <h2>test</h2>
            </article>
          }
          </TimelineBox>
        </table>
      </div>
    );
  }
}

export default AboutMe;
