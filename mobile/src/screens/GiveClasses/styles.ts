import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#8257e5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 180,
    lineHeight: 37,
    fontSize: 32,
    fontFamily: 'Archivo-Bold',
    color: '#fff',
  },
  description: {
    marginTop: 24,
    maxWidth: 240,
    lineHeight: 26,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#d4c2ff',
  },
  okButton: {
    height: 58,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#04d361',
  },
  okButtonText: {
    fontSize: 16,
    fontFamily: 'Archivo-Bold',
    color: '#fff',
  },
});

export default styles;
