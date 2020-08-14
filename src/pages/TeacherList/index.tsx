import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState();
  const [week_day, setWeekDay] = useState();
  const [time, setTime] = useState();

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    
    setIsFiltersVisible(false);

    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
      title="Proffys Disponíveis" 
      headerRight={
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color={"#fff"} />
        </BorderlessButton>
      }>
          { isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput 
                style={styles.input} 
                value={subject}
                onChangeText={ text => setSubject(text) }
                placeholder="Qual a matéria" 
                placeholderTextColor="#C1BCCC" 
              />

                <View style={styles.inputGroup}>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da Semana</Text>
                    <TextInput 
                      style={styles.input} 
                      value={week_day}
                      onChangeText={ text => setWeekDay(text) }
                      placeholder="Qual o dia?"
                      placeholderTextColor="#C1BCCC"
                    />
                  </View>

                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <TextInput 
                      style={styles.input}
                      value={time}
                      onChangeText={ text => setTime(text) } 
                      placeholder="Qual Horário?" 
                      placeholderTextColor="#C1BCCC"
                    />
                  </View>
                </View>
          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>

          </RectButton>
        </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;