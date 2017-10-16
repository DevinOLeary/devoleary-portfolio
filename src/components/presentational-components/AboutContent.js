import React from 'react';

//components
import TimelineHeader from './TimelineHeader';
import LoadedContent from './LoadedContent';


const AboutContent = (props) => {
  let headshot = props.aboutInfo.find(info => (
    info.acf.category ===  'headshot'
  ));
  return (
    <LoadedContent loading={props.aboutInfo}>
      <div className="triangle-background"></div>
      <div>
      <section className="flex-container row even-spacing reverse-wrap">
        <div className="flex-container center column ">
          <TimelineHeader {...props} loadTime={props.loadTime}/>
          <div>
              {props.timelineInfo.length > 0 &&
              props.active.length > 0 ?
                <article className="content-body_read">
                  <h2>{props.active[0].acf.time_title}</h2>
                  <h4>{props.active[0].acf.date_range}</h4>
                  <p>{props.active[0].acf.time_description}</p>
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
          </div>
        </div>
        {props.aboutInfo.length > 0 &&
          <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
          alt={headshot.acf.category}
          className="headshot"/>
        }
      </section>
      <section className="body-section">
        <hgroup className="header-offset">
          <h2 className="text-center">my passions</h2>
          <hr className="divider-colored"/>
        </hgroup>
        <div className="flex-container center">
          <article className="flex-container column center display-box">
            <div className="inner-box flex-container center">
              <h3>Test</h3>
            </div>
          </article>
        </div>
      </section>
      </div>
    </LoadedContent>
  );
}
export default AboutContent;
