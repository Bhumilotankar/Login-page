import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './Styles';

const Home=({navigation})=>{
    const handleLogout = () => {
        navigation.navigate('Logout');
      };
    return(
        <View>
<Text style={styles.text}>
        Abc
    </Text>
    <View style={styles.buttonview}>
    <TouchableOpacity  onPress={handleLogout}>
    <View style={styles.view}>
            <Text style={styles.buttonText}>Logout</Text>
          </View></TouchableOpacity>
    </View>
   
        </View>
    
    );
};

export default Home;