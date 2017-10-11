import {observable, action} from 'mobx';
import axios from 'axios';

class AboutMeStore{
  @observable timelineInfo = []


  @action loadTimeline(){
    this.timelineInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/aboutme?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.timelineInfo = res.data
    })
    .catch(error => console.log(error))
    }


}




export default AboutMeStore;
