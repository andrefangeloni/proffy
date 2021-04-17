import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './routes/AppStack';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#5a3c9e" />
    <AppStack />
  </>
);

export default App;
