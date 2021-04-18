import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

const TeacherList = () => {
  const [time, setTime] = React.useState('');
  const [weekday, setWeekday] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [teachers, setTeachers] = React.useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = React.useState(false);

  const onToggleFilters = () => setIsFiltersVisible((prevState) => !prevState);

  const handleFiltersSubmit = async () => {
    try {
      const { data } = await api.get('/classes', {
        params: {
          time,
          subject,
          week_day: weekday,
        },
      });

      setTeachers(data);
      setIsFiltersVisible(false);
    } catch (err) {
      // ignore err
    }
  };

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
              value={subject}
              onChangeText={setSubject}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={weekday}
                  onChangeText={setWeekday}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={setTime}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={() => handleFiltersSubmit()}
            >
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
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
