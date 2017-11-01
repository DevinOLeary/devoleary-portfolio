import React from 'react';
import {inject, observer} from 'mobx-react';

//components
import ProjectContainer from './presentational-components/ProjectContainer';
import ContentFadeIn from './small-components/ContentFadeIn';


@inject('store')
@observer
class DevAndDesign extends React.Component {

  componentWillMount(){
    this.props.store.projectStore.loadProjects()

  }

  componentDidMount(){
    this.props.store.projectStore.activeProject = '';
  }

  updateCategoryList = (category) => {
    this.props.store.projectStore.activeCategory = category
  }

  isOpen = (id) => {
    this.props.store.projectStore.activeProject = id.toString();
  };
  closeProject = () => {
    this.props.store.projectStore.activeProject = '';
  }

  render() {
    const {projectInfo, activeProject, loading, filteredProjects, activeCategory} = this.props.store.projectStore;
    let openProject = (projectInfo.length > 0 && activeProject.length > 0 &&
      projectInfo.find(info => (
        info.id.toString() === activeProject
      ))
    );
    const props = {projectInfo, activeProject, loading, filteredProjects, activeCategory, openProject}

    return(
      <main className="body-container">

        <hgroup>
          <h2 className="text-center">my work</h2>
          <br/>
        </hgroup>
        <ContentFadeIn in={!loading}>
          <ProjectContainer {...props} closeProject={this.closeProject} isOpen={this.isOpen} updateCategoryList={this.updateCategoryList}/>
        </ContentFadeIn>
      </main>

    );
  }
}

export default DevAndDesign;
