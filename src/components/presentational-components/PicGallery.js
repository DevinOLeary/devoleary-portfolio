import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer,inject} from 'mobx-react';

@inject('store')
@observer
class PicGallery extends React.Component {
  constructor(props){
    super(props);
    this.props.store.photographyStore.page = this.props.title.toLowerCase();
  }


  render(){
    const {picSort, locationMap} = this.props.store.photographyStore;
    if(locationMap.size === 0){
      return null;
    }
    // console.log(locationMap);
    // locationMap.forEach(function(value){
    //   return console.log(value.map(pic => pic.acf.photo_category))
    // });

    const list = [];
    let locationHeader = null;
    locationMap.forEach(function(value, key){
      if(key !== locationHeader){
        list.push(<h2 key={key}>{key}</h2>);
      }
      list.push(value.map(pic => (
        <li key={pic.id}>
          <img
          className="img-presented"
          src={pic._embedded['wp:featuredmedia']["0"].source_url}
          alt={pic.acf.photo_description}/>
        </li>
      )));
      locationHeader = key;
    });
    return(
      <div>
        <main className="body-container">
          <hgroup className="flex-container center">
            <h1>{this.props.title}</h1>
          </hgroup>
          <section className="flex-container center column">
            <ul>
              {list}
            </ul>
          </section>
        </main>
        <div className="flex-container center mini-block">
          <NavLink to="/photography"><button className="button-secondary">Back To Categories</button></NavLink>
        </div>
      </div>
    );
  }
}


export default PicGallery;
