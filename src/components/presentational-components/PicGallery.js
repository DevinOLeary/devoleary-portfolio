import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer,inject} from 'mobx-react';

@inject('store')
@observer
class PicGallery extends React.Component {

  componentDidMount(){
    this.props.store.photographyStore.page = this.props.title.toLowerCase();
  }

  render(){
    if(this.props.pics.length === 0){
      return null;
    }
    console.log(this.props.pics);
    const pics = this.props.pics;
    const list = pics.map(pic => {
      return (
        <li key={pic.slug}><img className="img-presented" src={pic._embedded['wp:featuredmedia']["0"].source_url}
        alt={pic.slug}
        /></li>
      );
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
