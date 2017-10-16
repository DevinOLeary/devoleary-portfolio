import React from 'react';
import LoadingPane from './LoadingPane';


const LoadedContent = ({children, ...props}) => {
  let loaded = props.loading

  if(loaded){
    return <LoadingPane/>
  }
  return <div className="body-container">{children}</div>
}

export default LoadedContent;
