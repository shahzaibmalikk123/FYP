import { StatusBar } from 'react-native';
import { StyleSheet, Text, View ,Image,Button, TouchableOpacity, ImageBackground,SafeAreaView,Pressable,Animated} from 'react-native';
import React, {useState, useContext } from 'react';
import { OrderDelivery,Categories,Checkout,Login,LoginScreen,SignUp,Selector,LabTests,LabTestsDetails,PatientDetails,Appointments}  from "./Index";
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS , icons,SIZES,images,FONTS} from '../constants';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Platform } from 'react-native';
import Tabs from '../navigation/tabs';

import {PracticeProvider,ContextP} from "../context";
const Stack = createStackNavigator();


export const AllScreensStack=()=>{
    return(
    <PracticeProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator 
          screenOptions={{
            headerShown :false
          }}
          initialRouteName={"Home"}
        >
          
          <Stack.Screen name ="Tabs" component={Tabs}/>
          <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
          <Stack.Screen name='Categories' component={Categories}/>
          <Stack.Screen name='Checkout' component={Checkout}/>
          <Stack.Screen name='LabTestsDetails' component={LabTestsDetails}/>
          <Stack.Screen name='PatientDetails' component={PatientDetails}/>
          <Stack.Screen name='Appointments' component={Appointments}/>
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </PracticeProvider>
    )
}
export default AllScreensStack;
