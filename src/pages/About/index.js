import React from 'react';

import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import './styles.css';

function About() {
  return (
    <div className="app">
      <Navbar />
      <Content
        title="O que é"
        text="O MoonOS será um sistema operacional baseado em Linux, construído 100% do zero com
        base na documentação/projeto de Gerard Beekmans (Linux From Scratch). A principal vantagem
        do sistema é a sua leveza em comparação a outros sistemas operacionais por ser construído
        do zero, utilizando apenas de pacotes essenciais para executar um sistema Linux. O sistema
        executa o i3wm como principal gerenciador de janelas, o i3status para a barra de tarefas
        e o dmenu como lançador de aplicativos."
      />
      <Content
        title="Desenvolvedor"
        text="O MoonOS está sendo desenvolvido por um estudante de programação e apaixonado pelo
        ecossistema Linux, Gustavo"
      />
      <Footer />
    </div>
  );
}

export default About;
