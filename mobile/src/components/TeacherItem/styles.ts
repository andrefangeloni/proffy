import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e6f0',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Archivo-Bold',
    color: '#32264d',
  },
  subject: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#6a6180',
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    color: '#6a6180',
  },
  footer: {
    padding: 24,
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: '#fafafc',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    color: '#6a6180',
  },
  priceValue: {
    fontSize: 16,
    fontFamily: 'Archivo-Bold',
    color: '#8257e5',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8257e5',
  },
  favorited: {
    backgroundColor: '#e33d3d',
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },
  contactButtonText: {
    marginLeft: 16,
    fontSize: 16,
    fontFamily: 'Archivo-Bold',
    color: '#fff',
  },
});

export default styles;
