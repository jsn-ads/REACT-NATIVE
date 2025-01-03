import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {

  // STATES

  // FUNCTIONS

  // APP
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor='#FFF' />
      <Text style={styles.title}>ThreeTwoApp</Text>
      <ImageBackground 
        source={require('./assets/w2.png')}
        style={styles.img}
      >
        <Text style={styles.title}>EM BREVE NOS CINEMAS</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#FF0000',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  img:{
    width:'100%',
    height:250
  }
});
