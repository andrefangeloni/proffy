import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeacherList = () => {
  const [isFiltersVisible, setIsFiltersVisible] = React.useState(false);

  const onToggleFilters = () => setIsFiltersVisible((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Header
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={() => onToggleFilters()}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible ? (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        ) : null}
      </Header>

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
