import React from 'react';
import Slider from 'react-slick';

import {LeftButton, RightButton} from '../small-components/SliderButtons';

const ProjectSlider = ({children,...props}) => {
  const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: <RightButton />,
     prevArrow: <LeftButton />,
     centerMode: true
   };
   return (
     <Slider {...settings}>
      {children}
     </Slider>
   );
}

export default ProjectSlider;
