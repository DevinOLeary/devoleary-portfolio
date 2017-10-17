import React from 'react';


const PicCategory = (props) => {
  return (
    <figure>
      <hgroup className="flex-container column center">
        <h2>{props.title}</h2>
        <hr className="dash-vertical"/>
      </hgroup>
      <img className="img-categories" src={props.image} alt= {props.title}/>
    </figure>
  )
}

export default PicCategory;
