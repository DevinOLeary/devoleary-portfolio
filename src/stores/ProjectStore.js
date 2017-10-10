import {observable, action} from 'mobx';
import axios from 'axios';

class ProjectStore {
  @observable projectInfo = []
  @observable activeProject = ''

  @action loadProjects(){
    this.picInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/projects?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.projectInfo = res.data
    })
    .catch(error => console.log(error))
    }


}




export default ProjectStore;
