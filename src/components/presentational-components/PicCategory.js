import React from 'react';


const PicCategory = (props) => {
  const coloredUnderline = {
    backgroundColor: `rgba(223,171,28,1)`,
    borderColor: `rgba(223,171,28,1)`
  }
  return (
    <div className="hover-highlight">
      <hgroup className="flex-container column center">
        <h2>{props.title}</h2>
        <hr className="link-underline" style={coloredUnderline}/>
      </hgroup>
      <img className="img-categories" src={props.image} alt= {props.title}/>
    </div>
  )
}

export default PicCategory;
