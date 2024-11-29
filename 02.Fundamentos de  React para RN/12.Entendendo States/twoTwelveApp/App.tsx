import { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, Button} from 'react-native';

export default function App() {

  const [name, setName] = useState('');

  const handleButtonOne = () =>{
    setName('Cristina');
  }

  const handleButtonTwo = () =>{
    setName('Neto');
  }

  return (
      <SafeAreaView>

        <StatusBar barStyle="light-content"backgroundColor="#FFF"/>

        <Text style={styles.title}>TwoTwelveApp</Text>

        <Text style={styles.subitle}>Meu nome é {name}</Text>

        <Button 
          title='Mudar para Cristina'
          onPress={handleButtonOne}
        />

        <Button 
          title='Mudar para Neto'
          onPress={handleButtonTwo}
        />

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    color: '#FF0000',
    textAlign : 'center'
  },
  subitle:{
    fontSize:19,
    color : '#999999',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  button:{
    padding : 10,
    margin : 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
