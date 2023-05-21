import React from 'react';
import { View,Text,SafeAreaView,TextInput,useState} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { COLORS, icons, SIZES, images, FONTS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home} from "./Index";
import {PracticeProvider,ContextP} from "../context";
import axiosInstance from '../axios/axiosInstance';
import { useStateContext } from "../context";
import { useContext } from "react";
import {auth }from "../firebase";

const LoginScreen=({navigation})=>{
    const { currentUser,login,loginWithGoogle, logout,resetPassword,changePassword,findUser } = useStateContext();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mongoUserData , setMongoUserData] = React.useState(null)


    React.useEffect(() => {
        if(currentUser?.email){
            const mongoUser =  findUser(email);
            setMongoUserData(mongoUser)
            navigation.navigate("Home")
        }
      }, [currentUser]);
    console.log(email)
    console.log(password)
    const handleLogin = async () => {
        try{
            const currentUser = await login(auth,email,password)
            
            
        } catch(error){
            console.error(error);
        }
        }
        // try {
        //   console.log(currentUser)
        //   currentUser = await login(auth, email, password);
          
        //   if(currentUser)navigate("Home")
        //   else{
        //     console.log(error)
        //   }
         
        //   // handle successful login here, for example, navigate to the home screen
          
          
        // } catch (error) {
        //   // handle login error here, for example, show an error message to the user
        //   console.log(error);
        // }

    
    
    const handleGoogleLogin = async () =>{
        
        try{
        const user = await loginWithGoogle();
        }catch(error){
            console.log(error)
        }
    };

     

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
                    Login here
                </Text>
                <Text style={{ textAlign:'center',fontSize:SIZES.h3,fontWeight:"500", paddingTop:25}}>
                    Welcome back you've been missed
                </Text>

            </View>
            <View style={{
                height:"30%",
                width:'100%',
                paddingHorizontal:20,
                paddingVertical:20,
                alignItems:'center'

            }}>
                <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email' style={{
                    width:'100%',
                    height:"30%",
                    backgroundColor:"#D9D9D9",
                    paddingHorizontal:10,
                    borderRadius:10


                }}/>

                <View style={{
                    width:'100%',
                    height:"10%",
                }}>

                </View>
                <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                placeholder='Password' style={{
                    width:'100%',
                    height:"30%",
                    backgroundColor:"#D9D9D9",
                    paddingHorizontal:10,
                    borderRadius:10


                }}/>
                <View style={{
                    width:'100%',
                    height:"30%",
                    justifyContent:'flex-end'
                }}>
                    <Text style={{alignSelf:'flex-end', fontWeight:'bold', color:'teal'}}>
                        Forgot your password?
                    </Text>
                </View>
                



            </View>
            <View style={{
                    width:'100%',
                    height:"40%",
                    paddingVertical:10,
                    paddingHorizontal:20,
                    
                }}>
                    <Pressable 
                    onPress={() => handleLogin(navigation)}
                    style={{height:'23%',borderRadius:10,justifyContent:'center',backgroundColor:'teal',paddingHorizontal:10,alignItems:'center',shadowOpacity :"0.3"}}>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:SIZES.h4}}>
                            Sign In
                        </Text>
                    </Pressable>
                    <View style={{
                        height:'5%',
                    }}>

                    </View>
                    <Pressable style={{height:'23%',borderRadius:10,justifyContent:'center',paddingHorizontal:10,alignItems:'center',shadowOpacity :"0.1"}}
                               onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={{fontWeight:'bold'}}>
                            Create new account
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
                        <Pressable 
                            
                            onPress={()=>handleGoogleLogin()}
                            style={{height:'55%',backgroundColor:'lightgrey',width:'10%',alignItems:'center',justifyContent:'center'}}>
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
                           <Icon size={20} color="teal"  name='logo-facebook'/>
                        </Pressable>
                    </View>


            </View>

        
        </SafeAreaView>
    )
}

export default LoginScreen;