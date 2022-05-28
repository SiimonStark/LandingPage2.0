import React, { Component } from 'react';
import Primary from './Primary/Primary';
import Mini from './Mini/Mini';
import {projects, urlIcons} from './data/projectList';

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      currentProject: projects[0],
      screenshotIndex: 0,
    }
  }

  renderPreviewInstances = () => {
    const remainingProjects = projects.filter((p) => {
      return p.name !== this.state.currentProject.name;
    });

    return remainingProjects.map((p, index) =>
      <Mini 
        project={p} 
        index={index} 
        displayProject={this.displayProject} />
    )
  }

  displayProject = (clickedProject) => {
    const projectObj = projects.find(p => p.name === clickedProject.name);
    this.setState({
      currentProject: projectObj, 
      screenshotIndex: 0
    });
  }

  renderToolIcons = () => {
    return this.state.currentProject.tools.map(t => {
      let icon = urlIcons.find(icon => icon.name === t);
      return <div className="tool" key={t}>
        <img src={icon.url} alt={t + ' icon'} />
        <h6 className="tip">{t}</h6>
      </div>
    })
  }

  changeScreenshot = (index, binary) => {
    this.setState({
      screenshotIndex: binary ? index + 1 : index - 1
    });
  }

  render() {
    let {currentProject, screenshotIndex} = this.state;

    return (
      <section className="Projects">
        <div className="projects-container">
          <Primary 
            project={currentProject}
            screenshotIndex={screenshotIndex}
            changeScreenshot={this.changeScreenshot}
            renderToolIcons={this.renderToolIcons} />
          <section className="Preview">
            {this.renderPreviewInstances()}
          </section>
        </div>
      </section>
    );
  }
}

export default Projects;



// Scraps____________
// ==================
// ==================
// ==================
// ==================
// ==================
// ==================
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