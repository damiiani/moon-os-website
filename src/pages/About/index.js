import React from 'react';

import Content from '../../components/Content';
import Navbar from '../../components/Navbar';

function About() {
  return (
    <div className="app">
      <Navbar />
      <Content
        title="Sobre"
        text="O MoonOS está sendo desenvolvido por um estudante de programação e apaixonado pelo
        ecossistema Linux, Gustavo"
      />
    </div>
  );
}

export default About;
