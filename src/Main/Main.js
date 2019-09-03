import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Projects from './Projects/Projects';

const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
    </main>
  )
}

export default Main;

// <Switch>
//   <Route path="/Welcome" component={Welcome} />
//   <Route path="/About" component={About} />
//   <Route path="/Projects" component={Projects} />
// </Switch>