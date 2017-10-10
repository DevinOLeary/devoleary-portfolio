import React from 'react';
import {observer, inject} from 'mobx-react';
import {Route} from 'react-router-dom';

//components
import Header from './Header';
import PhotoCategories from './PhotoCategories';
import PicGallery from './PicGallery';


@inject('store')
@observer
class Photography extends React.Component{
  constructor(props){
    super(props);
    this.props.store.photographyStore.loadImages();
  }


  render(){
    return(
      <div className="body-container">
        <Header />
        <Route path="/photography" exact component={PhotoCategories}/>
        <Route path="/photography/category_action" exact render={(props) => (<PicGallery title="Action"/>)}/>
        <Route path="/photography/category_travel" exact render={(props) => (<PicGallery title="Travel"/>)}/>
      </div>
    );
  }
}

export default Photography;
