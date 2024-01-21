/* eslint-disable no-dupe-keys */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors, Sizes, Themes} from '../constants';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {login} from '../slices/authSlice';
import {StackScreenNavigationProp} from '../Navigation';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<StackScreenNavigationProp<'Login'>>();

  const handleLogin = async () => {
    try {
      /*
       API call to handle login data
      const response = await someAuthenticationApiEndpoint(email, password);
      Expected response would be something like below
      const user = {id: 1, name: 'John Doe', email: 'john@example.com'};

      */
      const user = {id: 1, name: 'John Doe', email: 'john@example.com'};
      // Dispatch login action
      dispatch(login(user));

      // navigation.navigate('Productive');

      // Disable the back button by resetting the navigation stack
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (error) {
      //@ts-ignore -- TODO: handle errors when using an actual Authentication API
      console.error('Login failed:', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Themes.light.background,
  },
  logo: {
    width: 320,
    height: 50,
    marginBottom: 200,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: Themes.light.text,
    borderRadius: Sizes.borderRadius,
  },
  loginButton: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: Sizes.borderRadius,
  },
  loginButtonText: {
    color: Themes.light.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
