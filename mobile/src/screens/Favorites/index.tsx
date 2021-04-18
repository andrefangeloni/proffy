import React from 'react';
import { View, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = React.useState([]);

  const loadFavorites = async () => {
    try {
      const response = await AsyncStorage.getItem('proffy@favorites');

      if (response) {
        setFavorites(JSON.parse(response));
      }
    } catch (err) {
      // ignore err
    }
  };

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <Header title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.teacherListContainer}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
