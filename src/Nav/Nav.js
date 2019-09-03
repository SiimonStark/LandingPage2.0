import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink>About</NavLink>
      <NavLink>Projects</NavLink>
      <button>Contact</button>
      <button>Resume</button>
    </nav>
  )
}

export default Nav;