import React from 'react';
import {View, TouchableOpacity,Text } from 'react-native';
import Login from './Login';
import styles from './Styles';

const handledummy=({navigation})=>{
  const handle=()=>{
    navigation.navigate('Login');
  }
    return(
<View style={styles.buttonview}>
<TouchableOpacity onPress={handle}>
    <View  style={styles.view}>
        <Text style={styles.buttonText}>Login</Text>
    </View>
</TouchableOpacity>
</View>
    )
}

export default handledummy;