import React, { Component } from 'react';
import Primary from './Primary/Primary';
import Mini from './Mini/Mini';
import {projects} from './data/projectList';

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      currentProject: {},
      projectIndex: 0,
      screenshotIndex: 0,
    }
  }
  componentDidMount() {
    console.log('DAta', projects)
    this.setState({projects, currentProject: projects[0]})
  }

  renderPreviewInstances = () => {
    const remainingProjects = this.state.projects.filter((p) => {
      return p.name !== this.state.currentProject.name;
    });
    console.warn('List: ', remainingProjects);

    return remainingProjects.map((p, index) =>
      (<article 
        className="thumbnail" 
        id={index} key={index}
        onClick={e => this.displayProject(e)}
      >
        <h5>{p.name}</h5>
        <img src={p.screenshots[0]} alt={`Screenshot of ${p.name}`} />
      </article>)
    )
  }

  displayProject = (e) => {
    this.setState({currentProject: this.state.projects[this.state.currentProject]})
  }

  // componentDidMount() {
  //   const url = 'https://api.github.com/users/siimonstark';
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.compileData(data))
  //     .then(user => this.setState({user}))
  //     .catch(error => console.log('**failed to fetch: ', error))
  // }

  // compileData = (user) => {
  //   const userInfo = {name: user.name, image: user.avatar_url};
  //   console.log(user);
  //   const repos = this.gatherStarred(user.starred_url);
  //   return userInfo;
  // }

  // gatherStarred = (star_url) => {
  //   return fetch("https://api.github.com/users/SiimonStark/starred")
  //     .then(response => response.json())
  //     .then(data => console.log('Star Repos: ', data))
  // }

  render() {
    let {projectIndex, screenshotIndex} = this.state;
    const {name, screenshots, description, github, liveSite, tools} = this.state.currentProject;
console.log("Project State-> ",this.state)

    return (
      <section className="Projects">
        <div className="projects-container">
          <section className="Primary">
            <h3 className="title">{name && name}</h3>
            <section className="image">
              {screenshotIndex > 0 && (
                <button onClick={() => this.setState({ screenshotIndex: screenshotIndex - 1 })}>
                  Prev
                </button>
              )}
              {screenshots && (
                <img src={screenshots[screenshotIndex]} alt={`${name} screenshot`} />
              )}
              {screenshots && screenshotIndex < screenshots.length - 1 && (
                <button onClick={() => this.setState({ screenshotIndex: screenshotIndex + 1 })}>
                  Next
                </button>
              )}
            </section>
            <section className="descript">
              <div>
                {liveSite && (
                  <a href={liveSite} target="blank">
                    Live Site
                  </a>
                )}
                <a href={github} target="blank">
                  Github
                </a>
              </div>
              {description}
            </section>
          </section>
          <section className="Preview">
            {name && this.renderPreviewInstances()}
          </section>
        </div>
      </section>
    );
  }
}

export default Projects;