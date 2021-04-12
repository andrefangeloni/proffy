import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherForm = () => (
  <div id="page-teacher-form" className="container">
    <PageHeader
      title="Que incrível que você quer dar aulas"
      description="O primeiro passo é preencher este formulário de inscrição"
    />

    <main>
      <fieldset>
        <legend>Seus dados</legend>

        <div className="input-block">
          <label htmlFor="name">
            Nome completo
            <input type="text" id="name" />
          </label>
        </div>

        <div className="input-block">
          <label htmlFor="avatar">
            Avatar
            <input type="text" id="avatar" />
          </label>
        </div>

        <div className="input-block">
          <label htmlFor="whatsapp">
            WhatsApp
            <input type="text" id="whatsapp" />
          </label>
        </div>
      </fieldset>
    </main>
  </div>
);

export default TeacherForm;
