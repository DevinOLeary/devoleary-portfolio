import React from 'react';

export const LeftButton = (props) => {
  const {onClick} = props
  return <button onClick={onClick} className="left-button">Prev</button>
}

export const RightButton = (props) => {
  const {onClick} = props
  return <button onClick={onClick} className="right-button">Next</button>
}

export default {LeftButton, RightButton};
