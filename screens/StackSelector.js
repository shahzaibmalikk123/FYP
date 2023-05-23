import React from "react";
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View ,useState,Image,Button, TouchableOpacity, ImageBackground,SafeAreaView,Pressable,Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {PracticeProvider,ContextP} from "../context";
import { useStateContext } from "../context";
import { useContext } from "react";
import { AllScreensStack } from "./AllScreensStack";
import { AuthStack} from "./AuthStack";
export const StackSelector=()=>{
    const {  currentUser, signup,login,loginWithGoogle, logout,resetPassword,changePassword } = useStateContext();
    
    return(
        
        <NavigationContainer independent={true} >
        
            {
             (currentUser) ? <AllScreensStack/>  : <AuthStack/> 
            }
        
        </NavigationContainer>
       
        
    )
}
export default StackSelector;
