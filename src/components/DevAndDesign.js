import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import ProjectList from './presentational-components/ProjectList'
import ContentFadeIn from './small-components/ContentFadeIn';
import Content from './presentational-components/SliderContent';

@inject('store')
@observer
class DevAndDesign extends React.Component {

  componentWillMount(){
    this.props.store.projectStore.loadProjects()
    this.props.store.projectStore.activeProject = ''
  }

  isOpen = (id) => {
    this.props.store.projectStore.activeProject = id.toString();
  };
  closeProject = () => {
    this.props.store.projectStore.activeProject = '';
  }

  render() {
    const {projectInfo, activeProject, loading} = this.props.store.projectStore;
    let props = {projectInfo, activeProject, loading}
    return(
        <ContentFadeIn in={!loading}>
          <main className="body-container">
          <div className="triangle"></div>
            <section className="flex-container center column">
              <h2>my work</h2>
              <br/>
              <Content {...props}/>
            </section>
            <section>
              <ProjectList {...props} isOpen={this.isOpen}
              closeProject={this.closeProject}/>
            </section>
          </main>
        </ContentFadeIn>
    );
  }
}

export default DevAndDesign;
