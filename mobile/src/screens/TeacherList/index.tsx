import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />
    </View>
  );
};

export default TeacherList;
