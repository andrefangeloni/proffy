import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    marginTop: -40,
  },
  teacherListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    color: '#d4c2ff',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  input: {
    height: 54,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Archivo-Bold',
    color: '#fff',
  },
});

export default styles;
