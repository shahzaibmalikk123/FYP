import { StatusBar } from 'react-native';
import { StyleSheet, Text, View ,Image,Button, TouchableOpacity, SafeAreaView,Pressable,Animated} from 'react-native';
import React, {useState } from 'react';
import {Home} from './screens/Home';
import { OrderDelivery,Categories,Checkout}  from './screens/Index';
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS , icons,SIZES,images,FONTS} from './constants';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Platform } from 'react-native';
import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

const slides =[
  {
    id:1,
    title:'Online Pharmacy',
    description:'"Our website offers some of the very best prices on medicines and pharmaceutical products, together with a fantastic service"',
    Image : images.online_pharmacy1,
    
    
  },
  {
    id:2,
    title:'Health Care',
    description:'" Pharmacists are the health care team member with the most complete drug therapy knowledge, and they are prepared to use that information"',
    Image : images.health_care2,
    
    
  },
  {
    id:3,
    title:'Fastest delivery',
    description:'"Order Medicine and get delivery in the fastest time in the town "',
    Image : images.delivery_3,
    
  }
]

const App = ()=> {
  const [showHomePage, setShowHomePage] = useState(false);

  function showHome(){
    setShowHomePage(true);
  }
  
  const buttonLabel =(label) =>{
    return(
      <View style={{
        padding: 12,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color : COLORS.title,
          fontWeight: "600",
          fontSize: SIZES.h4
        }}>
          {label}
        </Text>
      </View>
    )
  }
  
  if(!showHomePage){
    return(
      
      <AppIntroSlider
        data={slides}
        renderItem={({item})=>{
          return(
            <SafeAreaView style={{flex:1,backgroundColor:"#62D7AF",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View style={{
              flex:1,
              alignItems:'center',
              padding:15,
              paddingTop:80,
              backgroundColor:"#62D7AF",
              

            }}>
              
              <Image
              source={item.Image}
                style={{
                  width:SIZES.width - 80,
                  height:400,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight:'bold',
                  fontSize: SIZES.h1,
                  color : COLORS.title,
                  textAlign:"center"

                }}
              >{item.title}</Text>
              <Text style={{
                textAlign:"center",
                paddingTop: 5,
                
                
              }}>
                {item.description}
              </Text>
              {item.id== 3 && (
                <View style={{justifyContent:'flex-end',width:'100%',height:'17%'}}>
                <Pressable
                onPress={()=> showHome()}
                style={{justifyContent:'center',height:'43%',alignItems:'center',width:'100%',flexDirection:'row',backgroundColor: "teal",borderRadius:30}}>
                  <Text style={{
                    color:'white',
                    fontSize:SIZES.h4,
                    fontWeight:'bold'
                  }}>
                    Get Started
                  </Text>
                  <View style ={{width:'2%'}}></View>
                  <View style={{ 
                    height:'50%',
                    width:'7%',
                    backgroundColor:'white',
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <Image 
                      source={icons.right}
                      style={{
                        width:"100%",
                        height:"100%"
                      }}
                    />
                  

                  </View>
                </Pressable>
                </View>
              )}
            </View>
            </SafeAreaView>
          )
        } }
        activeDotStyle={{
          backgroundColor : "#008080",
          width: 30
        }}
        showSkipButton
        renderNextButton={()=> buttonLabel("Next")}
        renderSkipButton={()=> buttonLabel("Skip")}
        renderDoneButton={()=> buttonLabel("")}
        //bottomButton
        // onDone={()=> {
        //   setShowHomePage(true);
        // }}
      />
    //</View>
    )
  }
  
  return (
    <NavigationContainer>
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
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#23AC8F'
  },
  oboarding:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#23AC8F'
  }
});
export default App;
