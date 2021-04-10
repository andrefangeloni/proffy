import React from 'react';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img src="https://github.com/andrefangeloni.png" alt="Avatar" />
      <div>
        <strong>André Angeloni</strong>
        <span>Informática</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias lançadas
      <br />
      <br />
      Apaixonado por estudar e desenvolver aplicaçações em ReactJS e React
      Native
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00</strong>
      </p>

      <button type="button">
        <img src={whatsApp} alt="WhatsApp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
