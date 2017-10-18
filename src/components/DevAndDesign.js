import React from 'react';
import {inject, observer} from 'mobx-react';
import {Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

//components
import ProjectList from './presentational-components/ProjectList'
import ContentFadeIn from './small-components/ContentFadeIn';
import Content from './presentational-components/SliderContent';
import ProjectContent from './presentational-components/ProjectContent';

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
    const props = {projectInfo, activeProject, loading}
    let openProject = (projectInfo.length > 0 && activeProject.length > 0 &&
      projectInfo.find(info => (
        info.id.toString() === activeProject
      ))
    );
    let openInfo = (openProject.acf);


    return(
        <ContentFadeIn in={!loading}>
          <main className="body-container">
          <span className="triangle"></span>
            <section className="flex-container center column">
              <h2>my work</h2>
              <br/>
              <Content {...props}/>
            </section>
            <section>
              <Element name='projectPane'><div></div></Element>
              {activeProject.length > 0 &&
                  <TransitionGroup>
                      <ContentFadeIn>
                        <section className="display-box flex-container center column" id={openProject.id}>
                          <button onClick={this.closeProject}>close</button>
                          <h2 className='text-center text-inverse'>{openInfo.title}</h2>
                          <br/>
                          <div className="flex-container center">
                            <ProjectContent info={openInfo}/>
                          </div>
                        </section>
                      </ContentFadeIn>
                  </TransitionGroup>
              }
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
