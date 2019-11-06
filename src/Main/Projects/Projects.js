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
        <div className="projects-container">
          <section className="Primary">
            <h3 class="title">Title of Project</h3>
            <p className="image">Img goes here</p>
            <p className="descript">
              some sort of descriptive text will go in this area here
            </p>
            <section className="mini-container">
              <p className="mini_view">small img</p>
              <p className="mini_view">small img</p>
              <p className="mini_view">small img</p>
              <p className="mini_view">small img</p>
              <p className="mini_view">small img</p>
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