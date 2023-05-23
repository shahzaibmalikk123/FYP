import React from 'react';
import { View,Text,SafeAreaView,TextInput} from 'react-native';
import { useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { COLORS, icons, SIZES, images, FONTS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home} from "./Index";
import {PracticeProvider,ContextP} from "../context";
import { useStateContext } from "../context";
import { useContext } from "react";
import {auth }from "../firebase";
import axios from 'axios';
import axiosInstance from '../axios/axiosInstance';
import { async } from '@firebase/util';
import { user } from '../constants/icons';

const SignUp=({navigation})=>{
    const { currentUser,login,signup,loginWithGoogle,resetPassword,changePassword } = useStateContext();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ username , setUserName] = React.useState('');
    //const [confirmPassword, setConfirmPassword] = React.useState('');
    //const [passwordError, setPasswordError] = React.useState(null);

    useEffect(() => {
        if(currentUser?.email)navigate("Home")
      }, [currentUser]);

      const handleSignUp = async () => {
        await axiosInstance
          .post("users/new", { name: username, email: email })
          .then(async (res) => {
            try {
              const data = await res.data;
              console.log(data);
              await signup(auth, email, password, username);
            } catch (error) {
              console.log(error)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

        
        // try {
        //   console.log(currentUser)
        //   currentUser = await signup(auth, email, password, username)
          
        //   if(currentUser)navigate("Home")
        //   else{
        //     console.log(error)
        //   }
         
        //   // handle successful login here, for example, navigate to the home screen
          
          
        // } catch (error) {
        //   // handle login error here, for example, show an error message to the user
        //   console.log(error);
        // }
      
    return(
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
            <View style={{
                height:"25%",
                width:'100%',
                paddingHorizontal:30,
                paddingVertical:50,
                alignItems:'center',
                justifyContent:'center',
                alignContent:'flex-end'
            }}>
                <Text style={{ textAlign:'center',fontSize:SIZES.h1, fontWeight:'bold',color:'teal'}}>
                    Create account
                </Text>
                <Text style={{ textAlign:'center',fontSize:SIZES.h3,fontWeight:"500", paddingTop:25}}>
                    Create an account so you can explore all the jobs
                </Text>

            </View>
            <View style={{
                height:"35%",
                width:'100%',
                paddingHorizontal:20,
                paddingVertical:20,
                alignItems:'center',

            }}>
                <TextInput 
                value={username}
                onChangeText={(text) => setUserName(text)}
                placeholder='username' style={{
                    width:'100%',
                    height:"25%",
                    backgroundColor:"#D9D9D9",
                    paddingHorizontal:10,
                    borderRadius:10


                }}/>
                <View style={{
                    width:'100%',
                    height:"8%",
                }}>

                </View>
                <TextInput 
                 value={email}
                 onChangeText={(text) => setEmail(text)}
                
                placeholder='Email' style={{
                    width:'100%',
                    height:"25%",
                    backgroundColor:"#D9D9D9",
                    paddingHorizontal:10,
                    borderRadius:10


                }}/>
                <View style={{
                    width:'100%',
                    height:"8%",
                }}>

                </View>
                <TextInput 
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                textContentType="password"
                placeholder='Password' style={{
                    width:'100%',
                    height:"25%",
                    backgroundColor:"#D9D9D9",
                    paddingHorizontal:10,
                    borderRadius:10


                }}/>
             
            </View>
            <View style={{
                    width:'100%',
                    height:"40%",
                    paddingVertical:10,
                    paddingHorizontal:20,
                    
                }}>
                    <Pressable
                        onPress={()=> handleSignUp()}
                        style={{height:'23%',borderRadius:10,justifyContent:'center',backgroundColor:'teal',paddingHorizontal:10,alignItems:'center',shadowOpacity :"0.3"}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:SIZES.h4}}>
                            Sign Up
                        </Text>
                    </Pressable>
                    <View style={{
                        height:'5%',
                    }}>

                    </View>
                    <Pressable style={{height:'23%',borderRadius:10,justifyContent:'center',paddingHorizontal:10,alignItems:'center',shadowOpacity :"0.1"}}
                               onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <Text style={{fontWeight:'bold'}}>
                            Already have an account
                        </Text>
                    </Pressable>
                    <View style={{
                        height:'0%',
                    }}>

                    </View>
                    <Pressable style={{height:'23%',borderRadius:10,justifyContent:'center',paddingHorizontal:10,alignItems:'center',shadowOpacity :"0.1",}}>
                        <Text style={{fontWeight:'bold',color:'teal'}}>
                            Or continue with
                        </Text>
                    </Pressable>
                    <View style={{width:'100%',height:'23%',flexDirection:'row',justifyContent:'center'}}>
                        <Pressable style={{height:'55%',backgroundColor:'lightgrey',width:'10%',alignItems:'center',justifyContent:'center'}}>
                           <Icon size={20} color="teal"  name='logo-google'/>
                        </Pressable>
                        <View style={{width:"5%"}}>

                        </View>

                        <Pressable style={{height:'55%',backgroundColor:'lightgrey',width:'10%',alignItems:'center',justifyContent:'center'}}>
                           <Icon size={20} color="teal"  name='logo-apple'/>
                        </Pressable>
                        <View style={{width:"5%"}}>

                        </View>
                        <Pressable style={{height:'55%',backgroundColor:'lightgrey',width:'10%',alignItems:'center',justifyContent:'center'}}>
                           <Icon size={20} color="teal" name='logo-facebook'/>
                        </Pressable>
                    </View>


            </View>

        
        </SafeAreaView>
    )
}

export default SignUp;