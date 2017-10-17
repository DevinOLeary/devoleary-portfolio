import {observable, action} from 'mobx';
import axios from 'axios';

class ProjectStore {
  @observable projectInfo = []
  @observable activeProject = ''
  @observable loading = true

  @action loadProjects(){
    this.picInfo = []
    let dataUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/projects?_embed';
    return axios.get(dataUrl)
    .then(res => {
      this.projectInfo = res.data
      this.loading = false
    })
    .catch(error => console.log(error))
    }


}




export default ProjectStore;
