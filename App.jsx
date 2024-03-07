import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente !== '' && password !== '') {
      if (password.length >= 8) {
        Alert.alert('Authenticated User');
      } else {
        Alert.alert('Password must be at least 8 characters');
      }
    } else {
      Alert.alert('Unauthenticated User');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="File Number"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={exp => {
            setExpediente(exp);
          }}
          value={expediente}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          maxLength={10}
          secureTextEntry={true}
          onChangeText={pass => {
            setPassword(pass);
          }}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={[styles.button, { backgroundColor: '#154854', fontSize: 18 }]}
          title="Sign in"
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
    backgroundColor: '#03989E', 
  },
  title: {
    fontSize: 36, 
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor: '#31849B', 
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
  },
  button: {
    color: 'white', 
  },
  TextInput: {
    fontSize: 16, 
    color: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
