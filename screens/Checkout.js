import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Pressable, Image, FlatList, StyleSheet,TextInput, TouchableHighlight,ImageBackground, useState, ScrollView, Modal } from 'react-native';
import { COLORS, icons, SIZES, images, FONTS } from '../constants';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from "lottie-react-native";

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
//import Animated from "react-native-reanimated";

export const Checkout=({route,navigation})=>{
    const[detail,setDetail] = React.useState(null)
    const [itemCounts , setItemCounts] = React.useState(null)
    const [totals, setTotals] = React.useState(null)
    const [orderItems, setOrderItems] = React.useState([])
    const [lottie,setLottie] = React.useState(false)
    const [carttData, setCarttData ] = React.useState([])
    const [buyyData , setBuyyData] = React.useState([])
    const [accordion , setAccordion] = React.useState(false);
    const [payAccordion , setPayAccordion] = React.useState(false);
    const [personalAccordion , setPersonalAccordion] = React.useState(false);
    const [ToEmpty, setToEmpty] = React.useState([])
    
    
    
    React.useEffect(() => {
       
        let { medicines , ord , itemC , cartData , buyData} = route.params;
        setItemCounts(itemC)
        setTotals(ord)
        setDetail(medicines)
        setCarttData(cartData)
        setBuyyData(buyData)
        setToEmpty(buyData)
        
    })
    
    let orderList , Shipping=10;
    function editOrder(action, id, price) {
        orderList = orderItems.slice()
        let item = orderList.filter(a => a.id == id)
        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            }
            else {
                const newItem = {
                    id: id,
                    qty: 1,
                    price: price,
                    total: price,
                }
                orderList.push(newItem)

            }
            setOrderItems(orderList)
        }
        else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }
            setOrderItems(orderList)


        }

    }

    function getOrderqty(id) {
        let orderItem = orderItems.filter(a => a.id == id)
        if (orderItem.length > 0) {
            return orderItem[0].qty
        }
        return 0
    }
    function total_checkout(){
        let total_sum = totals + Shipping
        return total_sum.toFixed(2)
    }
    function lottieAnimation(){
        setToEmpty({})
        return setLottie(true)
    }


    function renderHeader(){
        return(
            <View style={{ flexDirection: "row", marginTop: 0 ,width:'100%', }}>
                <Pressable style={{
                    width: 50,
                    padding: SIZES.padding * 0,
                    paddingLeft:SIZES.padding*2,
                    paddingRight:0,
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
                            tintColor:'teal'

                        }}
                    />
                    {/* <Icon name="arrow-back-outline" size={35} color="teal" /> */}

                </Pressable>

                
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding * 3,
                        borderRadius: SIZES.radius,


                    }}>


                    </View>

                </View>
                <Pressable style={{
                    width: 50,
                    padding: SIZES.padding * 0,
                    paddingRight:SIZES.padding*2,
                    paddingLeft:0,
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
                    <Icon name="list" size={35} color="teal"/>

                </Pressable>
            </View>
        )
    }
    function renderCheckout(){
        return(
            <View style={{
                paddingLeft:SIZES.padding*2,
                paddingRight:SIZES.padding*2,
                flex:1,
                
                
            }}>
                <View style={{
                    width:'100%',
                    height:'8%',
                    
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:SIZES.h4
                    }}>
                        CheckOut
                    </Text>
                </View>
                <View style={{
                    width:'100%',
                    height:'15%',
                    
                    flexDirection:'row'
                }}>
                    
                    <ScrollView scrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                    >
                                <View>
                                {   buyyData &&
                                    carttData?.map((item, index) => (
                                        <View
                                            key={index}
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                paddingHorizontal:
                                                    SIZES.padding * 3,
                                                paddingVertical: SIZES.padding,
                                                
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Image
                                                    source={{uri : item?.photo}}
                                                    resizeMode="contain"
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                                <Text
                                                    numberOfLines={1}
                                                    style={{
                                                        marginLeft:
                                                            SIZES.padding,
                                                        ...FONTS.h4,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item?.name} (x
                                                    {item?.quantity})
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        ...FONTS.h4,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    ${item?.price}
                                                </Text>
                                            </View>
                                        </View>
                                        
                                    ))}
                                    </View>
                            </ScrollView>

                    
                </View>
                <View style={{
                    width:'100%',height:'35%',flex:1,
                    //paddingTop:SIZES.padding*2.5,
                    //paddingBottom:SIZES.padding*5,
                    paddingVertical:10,
                }}>
                    <ScrollView nestedScrollEnabled={true} 
                                showsVerticalScrollIndicator={false}
                    style={{
                        }}>
                        
                            <View style={{
                                //height:'50%',
                                width:'100%',
                                flexDirection:'column',
                                paddingBottom:0,
                                }}>
                                <View style={{flexDirection:'row', justifyContent:'space-between',paddingBottom:0}}>
                                    
                                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>Personal Details</Text>
                                    
                                        <Pressable 
                                                onPress={() => setPersonalAccordion(!personalAccordion)}
                                                style={{
                                                marginLeft:10,
                                                backgroundColor:COLORS.lightGray,
                                                borderRadius:15,
                                                width:'6%',
                                                alignItems:'center',
                                                justifyContent:'center'
                                    }}>
                                        {!personalAccordion ? <Icon name="chevron-down-outline" style={{color:"teal"}} size={10}/>  : <Icon name="chevron-up-outline" size={10}/> }
                                          
                                        </Pressable>
                                </View>
                                { personalAccordion && 
                                <View style={{
                                    
                                    width:'100%',
                                    height:120, 
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
                                    
                                </View>}

                            </View>


                            <View style={{
                                //height:'50%',
                                width:'100%',
                                flexDirection:'column',
                                paddingBottom:0,
                                }}>
                                <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                                    
                                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>Delivery Location</Text>
                                    
                                        <Pressable 
                                                onPress={() => setAccordion(!accordion)}
                                                style={{
                                                marginLeft:10,
                                                backgroundColor:COLORS.lightGray,
                                                borderRadius:15,
                                                width:'6%',
                                                alignItems:'center',
                                                justifyContent:'center'
                                    }}>
                                        {!accordion ? <Icon name="chevron-down-outline" style={{color:"teal"}} size={10}/>  : <Icon name="chevron-up-outline" size={10}/> }
                                           
                                    </Pressable>
                                </View>
                                { accordion && 
                                <View style={{
                                    
                                    width:'100%',
                                    height:120,
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
                                    
                                </View>}

                            </View>
                            
                            <View style={{
                                //height:'50%',
                                width:'100%',
                                flexDirection:'column',
                                
                            }}>
                                <View style={{flexDirection:'row', justifyContent:'space-between',paddingTop:10}}>
                            
                                    <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>Payment Method</Text>
                            
                                    <Pressable 
                                                onPress={() => setPayAccordion(!payAccordion)}
                                                style={{
                                                backgroundColor:COLORS.lightGray,
                                                borderRadius:15,
                                                width:'6%',
                                                alignItems:'center',
                                                justifyContent:'center'
                                    }}>
                                        {!payAccordion ? <Icon name="chevron-down-outline" style={{color:"teal"}} size={10}/>  : <Icon name="chevron-up-outline" size={10}/> }
                                            
                                        
                                        
                                    </Pressable>
                                </View>
                                { payAccordion && <View style={{
                                width:'100%',
                                height:70,
                                alignItems:'center',
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
                                

                                </View> }
                                
                                

                            </View>
                            

                            
                        

                    </ScrollView>
                </View>
                
                <View style={{height:'5%',}}>

                </View>
                <View style={{
                    height:'37%',
                    width:'100%',
                    
                }}>
                    <View style={{
                    height:'10%',
                    width:'100%',
                    
                }}>
                        <Text style={{fontSize:SIZES.h4,fontWeight:'bold'}}>Order Info</Text>
                    </View>
                    <View style={{
                    height:'90%',
                    width:'100%',
                    
                    paddingBottom:0,paddingTop:20
                }}>
                    <View style={{
                    height:'15%',
                    width:'100%',
                    flexDirection:"row",
                    justifyContent:'space-between'

                    }}>
                        <Text style={{color:'gray'}}>Subtotal</Text>
                        <Text style={{fontWeight:'bold'}}>${totals}.00</Text>

                    </View>
                    <View style={{
                    height:'5%',
                    width:'100%',
                     }}></View>
                    <View style={{
                    height:'15%',
                    width:'100%',
                    flexDirection:"row",
                    justifyContent:'space-between'

                    }}>
                        <Text style={{color:'gray'}}>Shipping Cost</Text>
                        <Text style={{fontWeight:'bold'}}>+${Shipping}.00</Text>

                    </View>
                    <View style={{
                    height:'5%',
                    width:'100%',
                     }}>

                    </View>
                    <View style={{
                    height:'20%',
                    width:'100%',
                    flexDirection:"row",
                    justifyContent:'space-between',
                     }}>
                        <Text style={{color:'gray',alignSelf:'center'}}>Total</Text>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h2,alignSelf:'center'}}>${total_checkout()}  </Text>

                    </View>
                    <View style={{
                        height:'40%',
                        width:'100%',
                        justifyContent:'flex-end',
                        paddingBottom:20
                    }}>
                        <Pressable  
                            onPress={()=> lottieAnimation()}
                        style={{
                        height:'80%',
                        width:'100%',
                        backgroundColor:'teal',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:7
                    }}>
                        <Text style={{
                            fontSize:SIZES.h5,
                            color:'white',
                            fontWeight:'bold',

                        }}>CHECKOUT (${total_checkout()})   </Text>

                        </Pressable>

                    </View>

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
            {renderCheckout()}
            


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: COLORS.lightGray4,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? 40 : 40

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
    }

});
export default Checkout;
