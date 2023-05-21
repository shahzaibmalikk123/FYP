import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { View,Text} from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updatePassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import {Login} from "./Login";
import {LoginScreen} from "./Index";
import {SignUp} from "./Index";

import auth from 'firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// import { auth } from "../firebase";
//import { AuthProvider } from './AuthContext';
 
//  import { AuthContext } from './AuthContext';
import { PracticeProvider } from '../context';

export const AuthStack=()=>{
    
        return (
            <PracticeProvider>
                <Stack.Navigator 
                  screenOptions={{
                    headerShown :false
                  }}
                  initialRouteName={"Login"}
                >
                  <Stack.Screen  name='Login' component={Login} />
                  <Stack.Screen auth={auth} name='LoginScreen' component={LoginScreen} />
                  <Stack.Screen name='SignUp' component={SignUp} />
                  
                </Stack.Navigator>
              </PracticeProvider>
            
          );
    
}
export default AuthStack;
