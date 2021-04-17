import React from 'react';
import { StatusBar } from 'react-native';

import Landing from './screens/Landing';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#5a3c9e" />
    <Landing />
  </>
);

export default App;
