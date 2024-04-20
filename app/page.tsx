// page.tsx

import React from 'react';
import Layout from './layout';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Project/project';
const Home: React.FC = () => {
  return (
  <>
      <About />
      <Skills />
      <Projects/>
      <Contact />
      </>
  );
};

export default Home;
