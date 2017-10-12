import React from 'react';

export const LeftButton = (props) => {
  return <button onClick={props.onClick} className={props.className}></button>
}

export const RightButton = (props) => {
  return <button onClick={props.onClick} className={props.className}></button>
}

export default {LeftButton, RightButton};
