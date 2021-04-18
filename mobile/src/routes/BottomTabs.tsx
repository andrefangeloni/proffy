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
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name="ios-easel"
            size={size}
            color={focused ? '#8257e5' : color}
          />
        ),
      }}
    />

    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name="ios-heart"
            size={size}
            color={focused ? '#8257e5' : color}
          />
        ),
      }}
    />
  </Navigator>
);

export default BottomTabs;
