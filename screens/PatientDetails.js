import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    useState,
    ScrollView,
    Modal,
    Platform,
    TextInput
} from "react-native";

import LottieView from "lottie-react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import { isIphoneX } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/Ionicons";
import { useStateContext } from "../context";
import { useContext } from "react";

export const PatientDetails=({navigation,route})=>{
    const [LabPrice,setLabPrice]= React.useState(null);
    const [lottie,setLottie] = React.useState(false)
    const { item} = route.params;
    React.useEffect(() => {
       
        setLabPrice(item)
        
        
        
    })
   
        function lottieAnimation(){
            return setLottie(true)
        }
    
    
    
    
    
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", marginTop: 0 }}>
                <Pressable
                    style={{
                        width: 50,
                        padding: SIZES.padding * 0,
                        paddingLeft: SIZES.padding * 2,
                        paddingRight: 0,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "teal",
                        }}
                    />
                    {/* <Icon name="arrow-back-outline" size={35} color="teal" /> */}
                </Pressable>

                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                        }}
                    ></View>
                </View>
                <Pressable
                    style={{
                        width: 50,
                        padding: SIZES.padding * 0,
                        paddingRight: SIZES.padding * 2,
                        paddingLeft: 0,
                        justifyContent: "center",
                    }}
                >
                    {/* <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            paddingTop: SIZES.padding * 2, 

                        }}
                    /> */}
                    <Icon name="list" size={35} color="teal" />
                </Pressable>
            </View>
        );
    }

    function renderDetails(){
        return(
            <View style={{
                
                
                height:"100%",
                width:'100%',
                paddingHorizontal:SIZES.padding*2,
                paddingBottom:20
            }}>
                <View style={{
                    height:'26%',
                    width:'100%',
                    flexDirection:'column'
                }}>
                    <View style={{height:'20%',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h3}}>Personal Details</Text>
                    </View>

                    <View style={{
                                    
                                    width:'100%',
                                    height:"65%", 
                                    flexDirection:'column',
                                }}> 
                                    <View style={{
                                    width:'100%',
                                    flex:1,
                                    alignItems:'center',
                                    flexDirection:'row',
                                    height:'50%'
                                     }}>
                                        <View style={{
                                            height:"60%",
                                            backgroundColor:COLORS.lightGray,
                                            borderRadius:8,
                                            width:'10%',
                                            alignItems:'center',
                                            justifyContent:'center'
                                        }}>
                                            <Icon name="people-outline" size={25} color="teal"/>
                                        </View>
                                        <View style={{
                                            height:"60%",
                                            width:'85%',
                                            marginLeft:'5%',
                                            flexDirection:'row',
                                            
                                        }}>
                                            
                                                <TextInput 
                                                
                                                placeholder='First Name'
                                                style={{
                                                    width:'47%',
                                                    borderRadius:5,
                                                    paddingLeft: 5,
                                                    paddingRight:5,
                                                    backgroundColor:COLORS.lightGray
                                                    
                                                }}/>
                                                <TextInput 
                                                placeholder='Last Name'
                                                style={{
                                                    marginLeft:'6%',
                                                    width:'47%',
                                                    borderRadius:5,
                                                    paddingLeft: 5,
                                                    backgroundColor:COLORS.lightGray
                                                    
                                                }}/>
                                          </View>

                                    </View>

                                    <View style={{
                                        width:'100%',
                                        flex:1,
                                    }}>
                                        <View style={{
                                            
                                            width:'10%',
                                            
                                        }}>
                                            
                                        </View>
                                        <View style={{
                                        height:"100%",
                                        width:'85%',
                                        marginLeft:'15%',
                                        flexDirection:'row',
                                        alignContent:'center',
                                        alignItems:'center',

                                        
                                    }}>
                                        <TextInput 
                                            
                                            placeholder='Email'
                                            style={{
                                                width:'47%',
                                                height:'60%',
                                                borderRadius:5,
                                                paddingLeft: 5,
                                                paddingRight:5,
                                                backgroundColor:COLORS.lightGray
                                                
                                            }}/>

                                        <TextInput 
                                            
                                            placeholder='Contact No.'
                                            style={{
                                                width:'47%',
                                                height:'60%',
                                                borderRadius:5,
                                                paddingLeft: 5,
                                                paddingRight:5,
                                                backgroundColor:COLORS.lightGray,
                                                marginLeft:'6%'
                                                
                                            }}/>

                                        </View>

                                    </View>
                                    
                                </View>

                </View>

            
            <View style={{
                    height:'26%',
                    width:'100%',
                    flexDirection:'column'
                }}>
                <View style={{height:'20%',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h3}}>Address Details</Text>
                </View>
                <View style={{
                                    
                                    width:'100%',
                                    height:"65%",
                                    flexDirection:'column',
                                   
                                }}> 
                                    <View style={{
                                    
                                    width:'100%',
                                    flex:1,
                                    alignItems:'center',
                                    flexDirection:'row',
                                    height:'50%'
                                    

                                }}>
                                    <View style={{
                                        height:"60%",
                                        backgroundColor:COLORS.lightGray,
                                        borderRadius:8,
                                        width:'10%',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>
                                        <Icon name="location-outline" size={25} color="teal"/>
                                    </View>
                                    <View style={{
                                        height:"60%",
                                        width:'85%',
                                        marginLeft:'5%',
                                        flexDirection:'row',
                                        
                                    }}>
                                        
                                            <TextInput 
                                            
                                            placeholder='Street Address'
                                            style={{
                                                width:'100%',
                                                borderRadius:5,
                                                paddingLeft: 5,
                                                paddingRight:5,
                                                backgroundColor:COLORS.lightGray
                                                
                                            }}/>
                                            
                                        
                                        

                                    </View>

                                    </View>

                                    <View style={{
                                        width:'100%',
                                        flex:1,
                                    }}>
                                        <View style={{
                                            
                                            width:'10%',
                                            
                                        }}>
                                            
                                        </View>
                                        <View style={{
                                        height:"100%",
                                        width:'85%',
                                        marginLeft:'15%',
                                        flexDirection:'row',
                                        alignContent:'center',
                                        alignItems:'center',

                                        
                                    }}>
                                        <TextInput 
                                            
                                            placeholder='City'
                                            style={{
                                                width:'47%',
                                                height:'60%',
                                                borderRadius:5,
                                                paddingLeft: 5,
                                                paddingRight:5,
                                                backgroundColor:COLORS.lightGray
                                                
                                            }}/>

                                        <TextInput 
                                            
                                            placeholder='Zip Code'
                                            style={{
                                                width:'47%',
                                                height:'60%',
                                                borderRadius:5,
                                                paddingLeft: 5,
                                                paddingRight:5,
                                                backgroundColor:COLORS.lightGray,
                                                marginLeft:'6%'
                                                
                                            }}/>

                                        </View>

                                    </View>
                                    
                                </View>
                            </View>
                <View style={{height:'48%',paddingBottom:0,}}>
                    <View style={{height:'14%',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:SIZES.h3}}>PaymentMethod</Text>
                    </View>
                    <View style={{
                                    width:'100%',
                                    height:"23%",
                                    paddingTop:5,
                                    flexDirection:'row',
                                    

                                }}>
                                    <View style={{
                                        height:"50%",
                                        backgroundColor:COLORS.lightGray,
                                        borderRadius:8,
                                        width:'10%',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>
                                        <Icon name="cash-outline" size={25} color="teal"/>
                                    </View>
                                    <View style={{
                                        height:"50%",
                                        
                                        width:'80%',
                                        
                                        justifyContent:'center',
                                        marginLeft:'5%',
                                        flexDirection:'column'
                                    }}>
                                        <Text style={{fontWeight:'bold'}}>Cash on Delivery</Text>
                                        <Text style={{color:'gray',paddingTop:3}}>****-0921</Text>
                                    </View>
                                    

                    </View>
                    <View style={{height:'23%',
                                    }}>

                    </View>
                    <View style={{justifyContent:'space-between',flexDirection:'row',height:'10%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>Total</Text>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>{LabPrice?.price}</Text>

                    </View>
                    
                    
                    <View style={{height:'15%',width:"100%",}}>
                        <   Pressable
                                onPress={()=>lottieAnimation()}
                                        
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor: "#2A8C8D",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            borderRadius: 20,
                                        }}
                                    >
                                       
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: SIZES.h3,
                                                color: "white",
                                            }}
                                        >
                                            Confirm Order
                                        </Text>
                            </Pressable>

                        </View>

                </View>
                
            
                <Modal
                    visible={lottie}
                    onRequestClose={() => setLottie(false)}
                    style={{
                        flex:1,
                        
                        
                    }}
                >
                    <View style={{
                        flex:1,
                        backgroundColor:'teal'
                    }}>
                        <View style={{
                            width:'100%',
                            height:'50%',
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <LottieView
                                    style={{flex:1}}
                                    source={require('../assets/tick.json')}
                                    autoPlay
                                    loop={false}
                                />
                        </View>
                        <View style={{
                            width:'100%',
                            height:'50%',
                            alignItems:'center',
                            justifyContent:'flex-start',
                            flexDirection:'column',
                            padding:SIZES.padding*4,
                            paddingTop:20,
                            
                        }}>
                            <View style={{
                                width:"100%",
                                height:'15%',
                            }}>
                                
                                <Text style={{ fontSize:SIZES.h1, fontWeight:'bold',color:'white',textAlign:'center'}}>Order Confirmed</Text>
                                
                            </View>
                            <View  style={{
                                width:"100%",
                                height:'20%',
                                justifyContent:'center'
                            }}>
                                <Text style={{fontSize:SIZES.h4,color:'white',textAlign:'center',}}>Thankyou for your order, you will receive email confirmation shortly.</Text>
                            </View >
                            <View style={{
                                width:"100%",
                                height:'20%',
                                justifyContent:'center'
                            }}>
                                <Text style={{fontSize:SIZES.h4,color:'white',textAlign:'center'}}>
                                    Order will take short time to react its destination address.
                                </Text>
                            </View>
                            
                            <View style={{
                                width:"100%",
                                height:'50%',
                                justifyContent:'center',alignItems:'center'
                            }}>
                                <Pressable 
                                    onPress={()=> navigation.navigate('Home')}
                                    style={{
                                        width:'100%',height:"35%",backgroundColor:'white',
                                        justifyContent:'center',alignItems:'center',borderRadius:20,
                                    }}>
                                    <Text style={{color:'teal',fontWeight:'bold',fontSize:SIZES.h4}}>Back to Home</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                        
                    </View>
                </Modal>


            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderDetails()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});
export default PatientDetails
;
