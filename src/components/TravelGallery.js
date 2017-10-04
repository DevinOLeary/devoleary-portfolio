import React from 'react';
import {observer, inject} from 'mobx-react';
import {NavLink} from 'react-router-dom';

@inject('store')
@observer
class TravelGallery extends React.Component {

  render(){
    const pics = this.props.store.picInfo;
    const list = pics.map(pic => {
      return (
        <li key={pic.slug}><img className="img-presented" src={pic._embedded['wp:featuredmedia']["0"].source_url}
        alt={pic.slug}/></li>
      );
    });
    return(
      <div>
        <main className="showGallery">
          <hgroup>
            <h1>Travel</h1>
          </hgroup>
          <section>
            <h2>Gallery</h2>
            <ul>
              {list}
            </ul>
          </section>
          <NavLink to="/photography"><button>Back To Categories</button></NavLink>
        </main>
      </div>
    );
  }
}

export default TravelGallery;
