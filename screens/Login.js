import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { StatusBar } from 'expo-status-bar';
import { View,Text,ImageBackground,Image} from 'react-native';
import { COLORS, icons, SIZES, images, FONTS } from '../constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export const Login=( {navigation})=>{
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',paddingTop:20}}>
            <View style={{
                height:"25%",
                width:'100%',
            }}>
                <ImageBackground 
                    resizeMode='cover'
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                    source={images.medxCure} 
                
                
                />
            </View>
            <View style={{
                height:"75%",
                width:'100%',
            }}>
                <View style={{
                    height:"70%",
                    width:'100%',
                    paddingHorizontal:45,
                    paddingVertical:40,
                    paddingBottom:0,
                    alignItems:'center',
            }}>
                    <View style={{height:'50%'}}></View>
                    <Text style={{
                        fontSize:SIZES.h1,
                        textAlign:"center",
                        color: "teal",
                        fontWeight:'bold'
                    }}>
                        Discover all the medicines and lab tests here
                    </Text>
                    <Text style={{
                        fontSize:SIZES.h5,
                        textAlign:"center",
                        paddingTop:15
                    }}>
                        Explore all the existing medicines based on your diagnosis and recommended by doctor

                    </Text>
                </View>
                <View style={{
                    height:"30%",
                    width:'100%',
                    paddingTop:30
                }}>
                    <View style={{
                        height:"60%",
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:"space-around",
                        paddingHorizontal:0,
                        alignItems:'center',
                        justifyContent:'center'
                        
                }}>
                        <Pressable onPress={() => navigation.navigate("LoginScreen")}  style={{
                            width:"40%",
                            backgroundColor:'teal',
                            height:'80%',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:'10',
                            shadowOpacity :'0.1',

                        }}>
                            <Text style={{
                                fontWeight:'bold',
                                fontSize:SIZES.h4,
                                color:'white'
                            }}>
                                Login
                            </Text>
                        </Pressable>
                        <View style={{width:'6%'}}>

                        </View>
                        <Pressable 
                            onPress={()=>navigation.navigate("SignUp")}
                        
                        style={{
                            width:"40%",
                            height:'80%',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:'10'

                        }}>
                            <Text style={{
                                fontWeight:'bold',
                                fontSize:SIZES.h4
                            }}>
                                Register
                            </Text>

                        </Pressable>
                    <View>

                    </View>

                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}
export default Login;
