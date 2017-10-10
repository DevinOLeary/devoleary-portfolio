import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import Header from './Header';
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

  render() {
    const {projectInfo, activeProject} = this.props.store.projectStore;
    let props = {projectInfo, activeProject}
    return(
      <div>
        <main className="body-container">
          <Header />
          <section>
            <ProjectList {...props} isOpen={this.isOpen} category="Development"/>
          </section>
          <hr/>
          <section>
            <ProjectList {...props} isOpen={this.isOpen} category="Design"/>
          </section>
        </main>
      </div>
    );
  }
}

export default DevAndDesign;
