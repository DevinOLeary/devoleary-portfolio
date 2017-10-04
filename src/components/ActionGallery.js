import React from 'react';
import {observer, inject} from 'mobx-react';
import {NavLink} from 'react-router-dom';

@inject ('store')
@observer
class ActionGallery extends React.Component {
  render(){
    return(
      <main>
        <hgroup>
          <h1>Action</h1>
        </hgroup>
        <section>
          <h2>Gallery</h2>
        </section>
        <NavLink to="/photography"><button>Back To Categories</button></NavLink>
      </main>
    );
  }
}

export default ActionGallery;
