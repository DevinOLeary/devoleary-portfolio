import React from 'react';


const PicCategory = (props) => {
  return (
    <figure>
      <h2>{props.title}</h2>
      <img className="img-categories" src={props.image} alt= {props.title}/>
    </figure>
  )
}

export default PicCategory;
