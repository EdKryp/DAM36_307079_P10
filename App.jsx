import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

export default App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente !== '' && password !== '') {
      Alert.alert('Usuario autenticado');
    } else {
      Alert.alert('Usuario no autenticado');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder="Expediente"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={expediente => {
            setExpediente(expediente);
          }}
          value={expediente}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Contraseña"
          maxLength={10}
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
        />
      </View> 
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar sesión" 
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 20,
  },
});