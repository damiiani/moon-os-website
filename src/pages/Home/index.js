import React from 'react';

import Content from '../../components/Content';
import Navbar from '../../components/Navbar';

import './styles.css';

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Content
        title="Chegue a lua com o MoonOS"
        text="O MoonOS é uma distribuição Linux independente e não é baseada em nenhuma distribuição,
        tem como principal característica a navegação entre janelas similar ao famoso editor
        de texto Vim e é gratuito e open-source"
      />
    </div>
  );
}

export default Home;
