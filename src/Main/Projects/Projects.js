import React, { Component } from 'react';
import Primary from './Primary/Primary';
import Mini from './Mini/Mini';

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      projects: [],
    }
  }

  componentDidMount() {
    const url = 'https://api.github.com/users/siimonstark';
    fetch(url)
      .then(response => response.json())
      .then(data => this.compileData(data))
      .then(user => this.setState({user}))
      .catch(error => console.log('**failed to fetch: ', error))
  }

  compileData = (user) => {
    const userInfo = {name: user.name, image: user.avatar_url};
    console.log(user);
    const repos = this.gatherStarred(user.starred_url);
    return userInfo;
  }

  gatherStarred = (star_url) => {
    return fetch("https://api.github.com/users/SiimonStark/starred")
      .then(response => response.json())
      .then(data => console.log('Star Repos: ', data))
  }

  render() {
    return (
      <section className="Projects">
        <section className="projects-container">
          <Primary />
          <div className="projects_other">
            <Mini />
          </div>
        </section>
      </section>
    )
  }
}

export default Projects;