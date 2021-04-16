import React from 'react';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => (
  <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name} />
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>

    <p>{teacher.bio}</p>

    <footer>
      <p>
        Preço/hora
        <strong>{`R$ ${teacher.cost}`}</strong>
      </p>

      <button type="button">
        <img src={whatsApp} alt="WhatsApp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
