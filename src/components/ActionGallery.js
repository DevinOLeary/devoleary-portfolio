import React from 'react';
import {observer, inject} from 'mobx-react';
import {NavLink} from 'react-router-dom';

@inject ('store')
@observer
class ActionGallery extends React.Component {
  render(){
    const pics = this.props.store.photographyStore.picInfo;
    const list = pics.map(pic => {
      if(pic.acf.photo_category === "action") {
        return (
          <li key={pic.slug}><img className="img-presented" src={pic._embedded['wp:featuredmedia']["0"].source_url}
          alt={pic.slug}
          /></li>
        );
      }
    });
    return(
      <main className="body-container">
        <hgroup className="flex-container center">
          <h1>Action</h1>
        </hgroup>
        <section className="flex-container center column">
          <ul>
            {list}
          </ul>
        </section>
        <NavLink to="/photography"><button>Back To Categories</button></NavLink>
      </main>
    );
  }
}

export default ActionGallery;
