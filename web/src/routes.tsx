import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </BrowserRouter>
);

export default Routes;
