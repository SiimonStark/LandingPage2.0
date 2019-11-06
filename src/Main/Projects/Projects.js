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
    }
  }
  componentDidMount() {
    console.log('DAta', projects)
    this.setState({projects, currentProject: projects[0]})
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
    let i = 0;
    const {name, screenshots, description, github, liveSite, tools} = this.state.currentProject;
console.log("Project State-> ",this.state)

    return (
      <section className="Projects">
        <div className="projects-container">
          <section className="Primary">
            <h3 className="title">
              {name && name}
            </h3>
            {screenshots && (
              <img
                className="image"
                src={screenshots[i]}
                alt={`${name} screenshot`}
              />
            )}
            <section className="descript">
              <div>
                {liveSite && <a href={liveSite} target="blank">Live Site</a>}
                <a href={github} target="blank">Github</a>
              </div>
              {description}
            </section>
          </section>
          <section className="Preview">
            <article className="thumbnail">1</article>
            <article className="thumbnail">2</article>
            <article className="thumbnail">3</article>
          </section>
        </div>
      </section>
    );
  }
}

export default Projects;