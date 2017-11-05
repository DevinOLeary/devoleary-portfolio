import React from 'react';

export const LeftButton = (props) => {
  const {className, style, onClick} = props
  return <button style={{...style}} onClick={onClick} className={className}>Prev</button>
}

export const RightButton = (props) => {
  const {className, style, onClick} = props
  return <button style={{...style}} onClick={onClick} className={className}>Next</button>
}

export default {LeftButton, RightButton};
