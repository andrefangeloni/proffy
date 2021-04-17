import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginTop: 80,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  titleBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  buttonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    width: '48%',
    padding: 24,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Archivo-Bold',
    color: '#fff',
  },
  totalConnections: {
    marginTop: 40,
    maxWidth: 140,
    lineHeight: 20,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#d4c2ff',
  },
});

export default styles;
