import React from 'react';
import Slider from 'react-slick';

//components
import {LeftButton, RightButton} from '../small-components/SliderButtons';
import LoadingPane from '../small-components/LoadingPane';


const settings = {
  infinite: false,
  fade: true,
  accessibility: true,
  swipeToSlide: true,
  autoplay: true,
  centerMode: true,
  arrows: false
}
export const Content = (props) => {
  if(props.loading === true){return <LoadingPane/>} else {
    const filter = props.projectInfo.filter(cat => (
      cat.acf.category === 'skills'
    ));
    let skills = filter[0].acf;
    console.log(skills)
    return (

        <article className="flex-container center column full-width">
          <div className="flex-container center">
            <p className="content-body_read">{skills.description}</p>
          </div>
          <Slider {...settings} className="slider">
            <div>
              <img src={skills.image_one.url} className='img-skill' alt={skills.category}/>
            </div>
            <div>
              <img src={skills.image_two.url} className='img-skill' alt={skills.category}/>
            </div>
            <div>
              <img src={skills.image_one.url} className='img-skill' alt={skills.category}/>
            </div>
          </Slider>
        </article>
    );
  }
}

export default Content;
