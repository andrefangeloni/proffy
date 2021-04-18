import React from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';

interface HeaderProps {
  title: string;
  headerRight?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default Header;
