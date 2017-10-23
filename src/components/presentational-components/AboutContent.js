import React from 'react';

//components
import TimelineHeader from './TimelineHeader';
import LoadingPane from '../small-components/LoadingPane';

const AboutContent = (props) => {
  if(props.loading === true){return <LoadingPane/>}else{
    const activeDescription = (props.active.length > 0 &&
      props.active[0].acf.time_description
    )
    const headshot = props.aboutInfo.find(info => (
      info.acf.category ===  'headshot'
    ));
    return (
      <main className="body-container">
        <div className="triangle"></div>
        <div>
          <section className="flex-container row even-spacing reverse-wrap body-section ">
            <div className="flex-container center column ">
              <TimelineHeader {...props} loadTime={props.loadTime}/>
              <div className="flex-container center column">
                  {props.timelineInfo.length > 0 &&
                  props.active.length > 0 ?
                    <article className="content-body_read">
                      <h2>{props.active[0].acf.time_title}</h2>
                      <h4>{props.active[0].acf.date_range}</h4>
                      <p>{activeDescription}</p>
                    </article>
                    :
                    <article className="content-body_read">
                      <p>I believe we create our own purpose in life; one that ultimately brings us the most satisfaction and fulfillment. The scope that we apply to this purpose correlates with the level of satisfaction and fulfillment returned, so it only makes sense that we live with the greatest scope possible. We can't single handedly save the world, but we can each play our part to lead meaningful, intentional lives, and build tools that can be used to maximize environmental, societal, and personal wellbeing. I'm devoting my life to learning and collaborating with likeminded innovators to build the tools to achieve this ultimate purpose.
                      </p>
                    </article>
                }
              </div>
            </div>
              <img src={headshot._embedded['wp:featuredmedia']["0"].source_url}
              alt={headshot.acf.category}
              className="headshot"/>
          </section>
          <section className="body-section ">
            <hgroup className="header-offset">
              <h2 className="text-center">my passions</h2>
              <hr className="divider-colored"/>
            </hgroup>
            <div className="flex-container center">
              <article className="flex-container column center display-box">
                <div className="inner-box flex-container center column">
                  <h3>biking:</h3>
                  <p className="content-body_read">Mountain, road, gravel, town, unicycle.
                  Riding them and fixing them up</p>
                  <br/>
                  <h3>coffee shops:</h3>
                  <p className="content-body_read">Coffee is ok, but hanging out in cool coffee shops
                  with good vibes is one of the top reasons I migrated to computer work</p>
                  <h3>community:</h3>
                  <p className="content-body_read">I get super stoked about people doing cool things to bring
                  people together in their community. My life mission is to
                  maximize my role in creating community, and using the web to extend the range infinately.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default AboutContent;
