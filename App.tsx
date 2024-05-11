import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SignIn  from './src/screens/public/SignIn';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
