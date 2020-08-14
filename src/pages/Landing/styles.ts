import { StyleSheet } from 'react-native';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
    textAlign: 'center'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 30,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: '#9871f5'
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
    textAlign: "center",
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#c4d2ff',
    fontSize: 14.5,
    lineHeight: 20,
    maxWidth: 350,
    marginTop: 40,
  }

});

export default styles;