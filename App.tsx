/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import handledummy from './DummyScreen';
                                                                                                                                                                                                            
const Stack=createNativeStackNavigator();

const App = ()=>{
  return(
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{headerShown:false}} name="Dummy" component={handledummy}/>
    <Stack.Screen options={{headerShown:true}} name="Login" component={Login}/>
    <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
    <Stack.Screen name="Logout" component={Logout} />

    </Stack.Navigator>
    </NavigationContainer> 
     )
}



export default App;
