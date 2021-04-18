import React from 'react';
import { View, Text, Image, Linking, Alert } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

import api from '../../services/api';

import styles from './styles';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = React.useState(favorited);

  const openWhatsApp = async () => {
    const url = `whatsapp://send?phone=55${teacher.whatsapp}`;

    try {
      const isSupported = await Linking.canOpenURL(url);

      if (isSupported) {
        await api.post('connections', {
          user_id: teacher.id,
        });

        Linking.openURL(url);
      }
    } catch (err) {
      Alert.alert('Erro', 'Não é possível enviar WhatsApp nesse aparelho!');
    }
  };

  const onToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('proffy@favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id,
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem(
      'proffy@favorites',
      JSON.stringify(favoritesArray),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>{`R$ ${teacher.cost}`}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={() => onToggleFavorite()}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={() => openWhatsApp()}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
