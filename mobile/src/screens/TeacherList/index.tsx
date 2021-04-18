import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />

      <ScrollView
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.teacherListContainer}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default TeacherList;
