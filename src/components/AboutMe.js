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
            {timelineInfo.length > 0 &&
            active.length > 0 ?
            <article>
              <h2>{active[0].acf.time_title}</h2>
              <h4>{active[0].acf.date_range}</h4>
              <p>{active[0].acf.time_description}</p>
            </article>
            : <article>
                <p>Everyday carry normcore hammock flannel, live-edge vaporware
                freegan pug 8-bit single-origin coffee hell of meh DIY lyft.
                Pok pok craft beer post-ironic vice, williamsburg swag shaman
                 helvetica hexagon. Deep v seitan brunch vexillologist,
                 authentic ugh jean shorts single-origin coffee art party
                 trust fund unicorn succulents ethical plaid cornhole. </p>
              </article>
          }
          </TimelineBox>
        </table>
      </div>
    );
  }
}

export default AboutMe;
