import React from 'react';
import { View, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

import api from '../../services/api';

import styles from './styles';

const Landing = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = React.useState(0);

  const loadConnections = async () => {
    try {
      const {
        data: { total },
      } = await api.get('/connections');

      setTotalConnections(total);
    } catch (err) {
      // ignore err
    }
  };

  React.useEffect(() => {
    loadConnections();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigate('BottomTabs')}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigate('GiveClasses')}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        {`Total de ${totalConnections} conexões realizadas`}{' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
