import React from 'react';
import {Link, Element} from 'react-scroll';
import {TransitionGroup} from 'react-transition-group';

//components
import ProjectContent from './ProjectContent';
import ContentFadeIn from '../small-components/ContentFadeIn';



const ProjectList = (props) => {
  //is page loaded?
  if(props.loading === true){return null}else {
    const projectFilter = props.projectInfo.filter(proj => (
      proj.acf.category !== "skills"
    ));
    // mapping of projects
    const itemList = projectFilter.map(work => {
      const title = work.title.rendered;
        return (
          <li key={work.id}>
            <div className="project_item-container">
              <Element name={work.title.rendered} ><img className="img-project_list" src={work._embedded['wp:featuredmedia']["0"].source_url}
              alt={work.slug}/></Element>
            </div>
            <Element name={work.id.toString()}>
              <TransitionGroup>
                {work.id.toString() === props.activeProject &&
                  <ContentFadeIn>
                    <section className="display-box flex-container center column" id={work.id}>
                      <Link to={work.title.rendered} smooth={true}>
                        <button onClick={props.closeProject}>close</button>
                      </Link>
                      <h2 className='text-center text-inverse'>{work.title.rendered}</h2>
                      <br/>
                      <div className="flex-container center">
                        <ProjectContent info={work.acf}/>
                      </div>
                    </section>
                  </ContentFadeIn>
                }
              </TransitionGroup>
            </Element>
          </li>
        )
    })
    return (
      <div>
        <section className="flex-container center row">
          <ul>
            <li><a href=""><h2>Development</h2></a><hr className="divider-colored"/></li>
            <li><a href=""><h2>Design</h2></a><hr className="divider-colored"/></li>
          </ul>
          <ul>
            {itemList}
          </ul>
        </section>
      </div>
    );
  }



}

export default ProjectList;
