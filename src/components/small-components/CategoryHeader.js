import React from 'react';

const coloredUnderline = {
  backgroundColor: `rgba(223,171,28,1)`,
  borderColor: `rgba(223,171,28,1)`
}
const CategoryHeader = (props) => {
  return (
    <hgroup className="hover-highlight flex-container center column" onClick={props.onClick.bind(this, props.title)}>
      <h2 className={(props.title === props.activeCategory ? 'active' : '')}>{props.title}</h2>
      <hr className="link-underline" style={coloredUnderline}/>
    </hgroup>
  )
}

export default CategoryHeader;
