import React from 'react';
import {inject, observer} from 'mobx-react';
import {TimelineLite, TweenLite} from 'gsap';

//components
import ProjectListContainer from './presentational-components/ProjectListContainer';
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
  openingAnimation(){
    let box = document.getElementById('boxItem');
    return TweenLite.fromTo(box, 2, {height: '0px', opacity:0, y:-20}, {height: 'auto', opacity: 1, y:0, delay: 1});
  }
  closeProject = () => {
    setTimeout(() => {
      this.props.store.projectStore.activeProject = '';
    }, 800)
    this.closingAnimation();
  }
  closingAnimation(){
    let box = document.getElementById('boxItem');
    let tl = new TimelineLite();
    return tl.to(box.children, .4, {opacity:0}).to(box, .4, {height: '0px', opacity: 0});
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
          <ProjectListContainer {...props} closeProject={this.closeProject} isOpen={this.isOpen} updateCategoryList={this.updateCategoryList}/>
        </ContentFadeIn>
      </main>

    );
  }
}

export default DevAndDesign;
