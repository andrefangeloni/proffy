import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Favorites from '../screens/Favorites';
import TeacherList from '../screens/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 70,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        marginLeft: 16,
        fontSize: 13,
        fontFamily: 'Archivo-Bold',
      },
      activeTintColor: '#32264d',
      inactiveTintColor: '#c1bccc',
      activeBackgroundColor: '#ebebf5',
      inactiveBackgroundColor: '#fafafc',
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-easel" color={color} size={size} />
        ),
      }}
    />

    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-heart" color={color} size={size} />
        ),
      }}
    />
  </Navigator>
);

export default BottomTabs;
