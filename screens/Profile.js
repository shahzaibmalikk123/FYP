import React, { useEffect } from 'react';
import { View,Text,SafeAreaView,TextInput,useState,Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { COLORS, icons, SIZES, images, FONTS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home} from "./Index";
import {PracticeProvider,ContextP} from "../context";
import { useStateContext } from "../context";
import { useContext } from "react";
import {auth }from "../firebase";

export const Profile=({navigation})=>{
    const [user, setUser] = React.useState(null);
    
    const appointments = [
        {
            _id: "6451491b30424a98a658f40e",
            appointment_id: "29109",
            doctor_id: {
              _id: "6416246bc55a3617dbd6644a",
              name: "anyname"
            },
            patient_id: {
              _id: "6414707b96d17ff57f72c672",
              name: "anyname"
            },
            date: "2023-05-03T00:30:00.000Z",
            time: "05:30",
            status: "cancelled",
        },
        {
            _id: "6451491b30424a98a658f40f",
            appointment_id: "29110",
            doctor_id: {
              _id: "6416246bc55a3617dbd6644a",
              name: "anyname"
            },
            patient_id: {
              _id: "6414707b96d17ff57f72c672",
              name: "anyname"
            },
            date: "2023-05-03T00:30:00.000Z",
            time: "05:30",
            status: "cancelled",
        },
        {
            _id: "6451491b30424a98a658f40g",
            appointment_id: "29111",
            doctor_id: {
              _id: "6416246bc55a3617dbd6644a",
              name: "anyname"
            },
            patient_id: {
              _id: "6414707b96d17ff57f72c672",
              name: "anyname"
            },
            date: "2023-05-03T00:30:00.000Z",
            time: "05:30",
            status: "cancelled",
        },
        {
            _id: "6451491b30424a98a658f40h",
            appointment_id: "29112",
            doctor_id: {
              _id: "6416246bc55a3617dbd6644a",
              name: "anyname"
            },
            patient_id: {
              _id: "6414707b96d17ff57f72c672",
              name: "anyname"
            },
            date: "2023-05-03T00:30:00.000Z",
            time: "05:30",
            status: "cancelled",
        },
        {
            _id: "6451491b30424a98a658f40i",
            appointment_id: "29113",
            doctor_id: {
              _id: "6416246bc55a3617dbd6644a",
              name: "anyname"
            },
            patient_id: {
              _id: "6414707b96d17ff57f72c672",
              name: "anyname"
            },
            date: "2023-05-03T00:30:00.000Z",
            time: "05:30",
            status: "cancelled",
        },

    ]
    const { currentUser,login,loginWithGoogle, logout,resetPassword,changePassword,displayName,findUser } = useStateContext();
    console.log(currentUser)
    useEffect(() => {
        const getUser = async () =>{
            const user = await findUser(currentUser.email);
            setUser(user);
        }
        getUser();
    },[])
    return(
        
        <View style={{flex:1,alignItems:'center',paddingHorizontal:20,paddingTop:40}}>
            <View style={{
                height:'20%',
                width:'100%',
                paddingVertical:20,
                alignItems:'center',
            }}>
                <View style={{height:'100%',width:'22%',justifyContent:'center',alignItems:'center',borderRadius:60,backgroundColor:'lightgrey'}}>
                    <Image 
                        style={{height:'60%',}}
                        source={images.avatar_3}
                        resizeMode="contain"
                    />
                </View>
                
                 
            </View>
            <View style={{height:'10%',width:'100%'}}>
                <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:"bold",fontSize:SIZES.h1}}>
                        {user?.name}
                    </Text>
                </View>

            </View>
            <View style={{
                height:'70%',
                width:'100%',
                paddingVertical:0,
                alignItems:'center',
            }}>
                
                <View style={{flexDirection:'row',height:'15%',width:'100%',flexDirection:'row',alignItems:'center'}}>
                    <View style={{alignItems:'center',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Icon  name='call-outline' size={25} color="grey"/>
                    </View>
                    <Text style={{marginLeft:'3%',fontWeight:'500',color:'grey',fontSize:18}}>+92 3011234789</Text>
                </View>
                <View style={{flexDirection:'row',height:'15%',width:'100%',flexDirection:'row',alignItems:'center'}}>
                    <View style={{alignItems:'center',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Icon  name='mail-outline' size={25} color="grey"/>
                    </View>
                    <Text style={{marginLeft:'3%',fontWeight:'500',color:'grey',fontSize:18}}>{user?.email}</Text>
                </View>
                <Pressable onPress={()=>navigation.navigate("Appointments",{appointments})} style={{flexDirection:'row',height:'15%',width:'100%',flexDirection:'row',alignItems:'center'}}>
                    <View style={{alignItems:'center',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Icon  name='book-outline' size={25} color="grey"/>
                    </View>
                    <Text style={{marginLeft:'3%',fontWeight:'500',color:'grey',fontSize:18}}>View Appointments</Text>
                </Pressable>
                <View style={{height:'45%'}}></View>
                <Pressable 
                    onPress={()=>logout()} 
                    style={{flexDirection:'row',height:'10%',width:'100%',alignItems:'center',backgroundColor:'teal',justifyContent:'center',borderRadius:30,}}>
                        <View style={{alignItems:'center',height:'100%',alignItems:'center',justifyContent:'center',}}>
                            <Icon  name='log-out-outline' size={30} color="white"/>
                        </View>
                        <View
                            
                            style={{marginLeft:"3%",height:'100%',justifyContent:'center'}}>
                                <Text style={{fontWeight:'500',color:'white',fontSize:SIZES.h4,fontWeight:'bold'}}>Logout</Text>
                        </View>
                </Pressable>

            </View>
            
            
            
        </View>
    )
}
export default Profile;
