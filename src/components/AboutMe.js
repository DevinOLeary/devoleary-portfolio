import React from 'react';
import {inject, observer} from 'mobx-react';
import {TransitionGroup} from 'react-transition-group';

//components
import ContentFadeIn from './small-components/ContentFadeIn';
import TimelineHeader from './presentational-components/TimelineHeader';


@inject('store')
@observer
class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.props.store.aboutMeStore.loadAbout();
  }

  loadTime = (id) => {
    this.props.store.aboutMeStore.timePeriodId = id.toString();
  }

  render() {
    const {aboutInfo, activeTimePeriod} = this.props.store.aboutMeStore;
    const timelineInfo = aboutInfo.filter(info => (
      info.acf.category === 'timeline'
    ));
    const headshot = aboutInfo.find(info => (
      info.acf.category ===  'headshot'
    ));

    const props = {aboutInfo, timelineInfo};
    const active = activeTimePeriod;

    return (
        <div className="body-container">
          <div className="triangle-background"></div>
          <hgroup className="flex-container center column">
            <h2>a little about myself</h2>
          </hgroup>
          <br/>
          <TransitionGroup>
            {aboutInfo.length > 0 &&
              <ContentFadeIn>
                <section className="flex-container row even-spacing reverse-wrap">
                  <section className="flex-container center column ">
                    <TimelineHeader {...props} loadTime={this.loadTime}/>
                    <div>
                      <TransitionGroup>
                        <ContentFadeIn>
                        {timelineInfo.length > 0 &&
                        active.length > 0 ?
                          <article className="content-body_read">
                            <h2>{active[0].acf.time_title}</h2>
                            <h4>{active[0].acf.date_range}</h4>
                            <p>{active[0].acf.time_description}</p>
                          </article>
                          :
                          <article className="content-body_read">
                            <p>Everyday carry normcore hammock flannel, live-edge vaporware
                            freegan pug 8-bit single-origin coffee hell of meh DIY lyft.
                            Pok pok craft beer post-ironic vice, williamsburg swag shaman
                             helvetica hexagon. Deep v seitan brunch vexillologist,
                             authentic ugh jean shorts single-origin coffee art party
                             trust fund unicorn succulents ethical plaid cornhole. </p>
                          </article>
                      }
                        </ContentFadeIn>
                      </TransitionGroup>
                    </div>
                  </section>
                  <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
                  alt={headshot.acf.category}
                  className="headshot"/>
                </section>
                
              </ContentFadeIn>
          }
        </TransitionGroup>
        </div>
    );
  }
}

export default AboutMe;
