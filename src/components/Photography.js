import React from 'react';
import {observer, inject} from 'mobx-react';
import {Route, Switch} from 'react-router-dom';

//components
import PhotoCategories from './presentational-components/PhotoCategories';
import PhotoGallery from './PhotoGallery';
import ContentFadeIn from './small-components/ContentFadeIn';


@inject('store')
@observer
class Photography extends React.Component{


  componentWillMount(){
    this.props.store.photographyStore.loadImages();
  }





  render(){
    const {picInfo, page, picSort, loading} = this.props.store.photographyStore;
    const props = {picInfo, page, loading, picSort};
    return(
      <div className="body-container">

      <Switch>
        <Route exact path="/photography" exact render={props => <PhotoCategories {...props}/>}/>
        <Route path="/photography/category_action" exact render={props => <PhotoGallery title="Action" {...props} />}/>
        <Route path="/photography/category_travel" exact render={props => <PhotoGallery title="Travel" {...props} />}/>
      </Switch>
    
      </div>
    );
  }
}

export default Photography;
