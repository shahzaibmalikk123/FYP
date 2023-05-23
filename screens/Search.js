import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { useStateContext } from "../context";
import { useContext } from "react";
import { TextInput,View,Text,SafeAreaView,Pressable,Image,FlatList,StyleSheet,ImageBackground,ScrollView,Alert} from 'react-native';

import { COLORS , icons,SIZES,images,FONTS} from '../constants';

export const Search=({navigation})=>{
    
    
    


    // price rating
    const poor = 2
    const average = 3.5
    const veryGood = 5

    const {medicineData} = useStateContext();
    const [medicine,setMedicine] = React.useState(medicineData)
    const [filteredArray,setFilteredArray] = React.useState(medicine)




    function fetchMedicines(text){
        let after_filtering= medicine.filter(i => i.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredArray(after_filtering)
    }
    return(
        <SafeAreaView style={{flex:1,justifyContent:'flex-start'}}>
            <View style={{flex:1}}>
            <View style={{height:50,padding:SIZES.padding*2,flexDirection:'row',marginBottom:10}}>
                <TextInput
                    
                    placeholder='Search'
                    style={{backgroundColor:'lightgray',width:"90%",height:30,borderRadius:10,justifyContent:'center',alignItems:'center',paddingLeft:10,paddingRight:10}}
                    
                    onChangeText={(text)=>fetchMedicines(text)}
                    
                />
                <Pressable style={{width:"10%",justifyContent:'center',alignItems:'center',height:30}}>
                    <Image
                        source={icons.search_2}
                        resizeMode="contain"
                        style={{
                            height:20,
                            width:20
                        }}
                    />
                </Pressable>

            </View>
            <View style={{
                flex:1,
                
            }}>
                <ScrollView style={{
                    
                    padding:SIZES.padding*2,borderRadius:30,marginBottom:10,
                    
                }}>
                {
                    
                    filteredArray.map((item,index)=>{
                        
                    return(
                     <View 
                     key={item.id}
                     style={{
                        justifyContent:'flex-start'
                     }}>  
                    <Pressable 
                        onPress={() => navigation.navigate('OrderDelivery',{item})}
                        style={{
                                    marginBottom:10,alignItems:'center',flexWrap:'wrap',
                                    flexDirection:'row',borderWidth:0,borderRadius:20,alignItems:"center",padding:SIZES.padding*0.5,height:50,borderBottomWidth:0.3,borderBottomColor:"lightgray",
                                    }}>

                            <Image
                                source={{uri : item.photo}}
                                resizeMode="cover"
                                style={{
                                    width:'10%',
                                    height:'90%',borderRadius:30,
                                    backgroundColor:'white'
                                }}

                            />
                            <View style={{
                                height:'100%',width:'60%',padding:SIZES.padding*0.5,justifyContent:'center',borderRadius:30,
                            }}>
                                <Text 
                                numberOfLines={1}
                                style={{
                                   fontWeight:'bold',
                                   
                                }}>
                                    <Text>{item.name}</Text>
                                </Text>

                            </View>
                            <Pressable style={{
                                justifyContent:'center',
                                
                                alignItems:'flex-start',flex:1
                            }}
                            
                            >
                                <Text 
                                style={{
                                    fontWeight:'bold'
                                }}
                                numberOfLines={1}>
                                    
                                </Text>

                            </Pressable>
                            
                            
                    </Pressable>
                    </View>
                    
                    
                    
                    
                    );
        
                    })
                }
                    
                </ScrollView>
            </View>
            </View>
        </SafeAreaView>
    )
}
export default Search;
