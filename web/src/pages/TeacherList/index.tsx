import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherList = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os Proffys disponíveis">
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">
            Matéria
            <input type="text" id="subject" />
          </label>
        </div>

        <div className="input-block">
          <label htmlFor="week_day">
            Dia da semana
            <input type="text" id="week_day" />
          </label>
        </div>

        <div className="input-block">
          <label htmlFor="time">
            Hora
            <input type="text" id="time" />
          </label>
        </div>
      </form>
    </PageHeader>
  </div>
);

export default TeacherList;
