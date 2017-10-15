import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
import {Element} from 'react-scroll';

//components
import SideMenu from './presentational-components/SideMenu';
import ContentFadeIn from './small-components/ContentFadeIn';

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

@inject('store')
@observer
class PicGallery extends React.Component {
  constructor(props){
    super(props);
    this.props.store.photographyStore.page = this.props.title.toLowerCase();
  }



  handleImageLoad(){
    const galleryElement = this.refs.gallery;
    this.props.store.photographyStore.loading = !imagesLoaded(galleryElement);
  }

  getStyle(){
    return {opacity: this.props.store.photographyStore.loading ? 0 : 1}
  }


  render(){
    const {picSort, locationMap} = this.props.store.photographyStore;
    if(locationMap.size === 0){
      return null;
    }
    const list = [];
    let locationHeader = null;
    locationMap.forEach(function(value, key){
      if(key !== locationHeader){
        list.push(<Element name={key} key={key}><h2>{key}</h2></Element>);
      }
      list.push(value.map(pic => (
        <li key={pic.id} >
          <img
          className="img-presented"
          src={pic._embedded['wp:featuredmedia']["0"].source_url}
          alt={pic.acf.photo_description}/>
        </li>
      )));
      locationHeader = key;
    });
    const menuMap = []
    locationMap.forEach(function(value, key){
      return menuMap.push(key);
    });
    const loading = this.props.store.photographyStore.loading;
    return(
      <div>
        <main className="body-container">
          <hgroup className="flex-container center">
            <h1>{this.props.title}</h1>
          </hgroup>
          <div style = {this.getStyle()}>
          <ContentFadeIn in={!loading}>
            <section className="flex-container center column">
              <ul ref="gallery" onLoad={this.handleImageLoad.bind(this)}>
                {list}
              </ul>
            </section>
          </ContentFadeIn>
          </div>
        </main>
        <div className="flex-container center mini-block">
          <NavLink to="/photography"><button className="button-secondary">Back To Categories</button></NavLink>
        </div>
        <section className="nav-side">
          <SideMenu menu={menuMap} allPics={picSort}/>
        </section>
      </div>
    );
  }
}


export default PicGallery;
