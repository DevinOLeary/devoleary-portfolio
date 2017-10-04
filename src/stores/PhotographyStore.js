import {observable, action} from 'mobx';
import axios from 'axios';

class PhotographyStore {
  @observable picInfo

  constructor() {
    this.picInfo = []
  }

  @action loadImages(){
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/photos?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.picInfo = res.data
    })
    .then(console.log(this.picInfo))
    .catch(error => console.log(error))
    }

}




export default PhotographyStore;
