import React from 'react';
import Slider from 'react-slick';

//components
import {LeftButton, RightButton} from '../small-components/SliderButtons';


const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  swipeToSlide: true,
  dots: true,
  prevArrow: <LeftButton />,
  nextArrow: <RightButton />
}
export const Content = (props) => (

  <Slider {...settings} className="content-body_read text-inverse">
    <div>
      <img src={props.info.image_one.url} className='img-project_preview' alt={props.info.category}/>
      <p>{props.info.description}</p>
    </div>
    <div>
      <h2>{props.info.description}</h2>
    </div>
    <div>
      <h2>{props.info.description}</h2>
    </div>
    <div>
      <h2>{props.info.description}</h2>
    </div>
  </Slider>
)

export default Content;
