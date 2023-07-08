
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Styles';
import bcrypt from 'react-native-bcrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginErrors from './LoginErrors';
import NetInfo from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = async () => {
    setIsLoading(true);
    const isConnected = await NetInfo.fetch().then((state) => state.isConnected);
    if (!isConnected) {
      setErrorMessage(LoginErrors.NETWORK_ERROR);
      setIsLoading(false);
    }
    else if (!email && !password) {
      setEmailError(true);
      setPasswordError(true);
      setErrorMessage(LoginErrors.MISSING_FIELDS);
      setIsLoading(false);
    }
    else if (!email || !password) {
      if (!email) {
        setEmailError(true);
        setErrorMessage(LoginErrors.INVALID_EMAIL);
        setIsLoading(false);

      }
      else if (!password) {
        setPasswordError(true);
        setErrorMessage(LoginErrors.INVALID_PASSWORD);
        setIsLoading(false);

      }
    }
    else {
      await handleLogin();

    }
  }


  const handleLogin = async () => {
    try {

      const response = await fetch('https://www.myjsons.com/v/1ee31319');
      const jsonData = await response.json();

      const user = await jsonData.check.find(u => u.email === email);

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          await AsyncStorage.setItem('loggedIn', 'true');
          setTimeout(() => {
            setIsLoading(false);
            navigation.navigate('Home');
          }, 1000);
        } else {
          Alert.alert('Error', 'Invalid password!');

        }

      } else {
        Alert.alert('Error', 'Invalid userrname!');
      }

    } catch (error) {
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('loggedIn');
      if (isLoggedIn === 'true') {
        navigation.replace('Home');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.text}>Register Now to Start</Text>
      </View>
      <Text style={styles.texta}>Your Email</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          width: 330,
          borderColor: emailError ? 'red' : '#175CA4',
          height: 50,
          paddingLeft: 10,
          marginTop: 12,
          marginLeft: 18,
        }}>
        <MaterialIcons
          name="account-circle"
          style={{ color: 'black' }}
          size={24}
        />

        <TextInput
          maxLength={25}
          style={styles.textin}
          onChangeText={text => {
            setEmail(text);
            setEmailError(false);
          }}
          value={email}
          placeholder="youremail@gmail.com"
          placeholderTextColor="#808080"
        />
        <Octicons
          name={email ? 'check' : ''}
          style={{ color: '#175CA4', marginRight: 17 }}
          size={24}
        />
      </View>
      <Text style={styles.texta}>Password</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          width: 330,
          borderColor: passwordError ? 'red' : '#175CA4',
          height: 50,
          paddingLeft: 10,
          marginTop: 12,
          marginLeft: 18,
        }}>
        <MaterialIcons name="lock" style={{ color: 'black' }} size={24} />

        <TextInput
          maxLength={25}
          style={styles.textin}
          onChangeText={text => {
            setPassword(text);
            setPasswordError(false);
          }}
          secureTextEntry={!showPassword}
          value={password}
          placeholder="Enter Password"
          placeholderTextColor="#808080"
        />
        <Octicons
          name={showPassword ? 'eye' : 'eye-closed'}
          style={{ color: '#175CA4', marginRight: 15 }}
          size={24}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <TouchableOpacity>
        <View>
          <Text style={styles.recovery}>Recovery Password?</Text>
        </View>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.buttonview}>
        <TouchableOpacity onPress={validate}>
          <View
            style={[
              styles.view,
              isLoading
                ? { backgroundColor: '#175cA4' }
                : { backgroundColor: '#175cA4' },
            ]}>
            {!isLoading ? (
              <Text style={styles.buttonText}>Sign in</Text>
            ) : (
              <ActivityIndicator size={23} color="white" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;