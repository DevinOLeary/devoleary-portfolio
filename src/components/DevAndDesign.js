import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import ProjectList from './presentational-components/ProjectList'

@inject('store')
@observer
class DevAndDesign extends React.Component {
  constructor(props){
    super(props);
    this.props.store.projectStore.loadProjects()
  }
  componentWillMount(){
    this.props.store.projectStore.activeProject = ''
  }


  isOpen = (id) => {
    this.props.store.projectStore.activeProject = id.toString();
  };
  closeProject = () => {
    this.props.store.projectStore.activeProject = '';
  }

  render() {
    const {projectInfo, activeProject} = this.props.store.projectStore;
    let props = {projectInfo, activeProject}
    return(
      <div>
        <main className="body-container">
          <section>
            <ProjectList {...props} isOpen={this.isOpen}
            closeProject={this.closeProject} category="Development"/>
          </section>
          <br/>
          <section>
            <ProjectList {...props} isOpen={this.isOpen}
            closeProject={this.closeProject} category="Design"/>
          </section>
        </main>
      </div>
    );
  }
}

export default DevAndDesign;
