import { StatusBar } from 'react-native';
import { StyleSheet, Text, View ,Image,Button, TouchableOpacity, ImageBackground,SafeAreaView,Pressable,Animated} from 'react-native';
import React, {useState, useContext } from 'react';
import { OrderDelivery,Categories,Checkout,Login,LoginScreen,SignUp,AuthStack,AllScreensStack,StackSelector}  from './screens/Index';
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS , icons,SIZES,images,FONTS} from './constants';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Platform } from 'react-native';
import Tabs from './navigation/tabs';
import {PracticeProvider,ContextP, useStateContext} from "./context";
const Stack = createStackNavigator();


const slides =[
  {
    id:1,
    title:'Online Pharmacy',
    description:'"Our website offers some of the very best prices on medicines and pharmaceutical products, together with a fantastic service"',
    Image : images.online_pharmacy1,
    
    image:images.OB_bg3,
    
  },
  {
    id:2,
    title:'Health Care',
    description:'" Pharmacists are the health care team member with the most complete drug therapy knowledge, and they are prepared to use that information"',
    Image : images.health_care2,
    image : images.OB_bg3,
    
  },
  {
    id:3,
    title:'Fastest delivery',
    description:'"Order Medicine and get delivery in the fastest time in the town "',
    Image : images.delivery_3,
    bgColor:"#62D7AF"
    
    
  }
]

const App = ()=> {
  const [showHomePage, setShowHomePage] = useState(false);
  
  function showHome(){
    setShowHomePage(true);
  }
  
  const buttonLabelNext =(label) =>{
    return(
      <View style={{
        padding: 12,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color : 'grey',
          fontWeight: "600",
          fontSize: SIZES.h4
        }}>
          {label}
        </Text>
      </View>
    )
  }

  const buttonLabelSkip =(label) =>{
    return(
      <View style={{
        padding: 12,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color : 'teal',
          fontWeight: "600",
          fontSize: SIZES.h4
        }}>
          {label}
        </Text>
      </View>
    )
  }

  const buttonLabel =(label) =>{
    return(
      <View style={{
        padding: 12,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color : 'white',
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
            <SafeAreaView style={{flex:1,backgroundColor:'white' }}>
              <ImageBackground 
                source={item.image}
                resizeMode="cover"
                style={{
                  flex:1,
                  
                }}
              >
                
              
            <View style={{
              flex:1,
              alignItems:'center',
              padding:15,
              paddingTop:80,
              backgroundColor:item.bgColor,
              
              }}>
              
              <Image
              source={item.Image}
                style={{
                  width:SIZES.width - 80,
                  height:400,
                  ...styles.shadow
                  
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight:'bold',
                  fontSize: SIZES.h1,
                  color : "#606467",
                  textAlign:"center"

                }}
              >{item.title}</Text>
              <Text style={{
                textAlign:"center",
                paddingTop: 5,
                color:'#606467'
                
              }}>
                {item.description}
              </Text>
              {item.id== 3 && (
                <View style={{justifyContent:'flex-end',width:'100%',height:'17%'}}>
                <Pressable
                onPress={()=> showHome()}
                style={{justifyContent:'center',height:'43%',alignItems:'center',width:'100%',flexDirection:'row',backgroundColor: "teal",borderRadius:30}}>
                  <Text style={{
                    color:'black',
                    fontSize:SIZES.h4,
                    fontWeight:'bold'
                  }}>
                    Get Started
                  </Text>
                  <View style ={{width:'2%'}}></View>
                  <View style={{ 
                    height:'50%',
                    width:'6%',
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
            </ImageBackground>
            </SafeAreaView>
          )
        } }
        activeDotStyle={{
          backgroundColor : "#008080",
          width: 30
        }}
        showSkipButton
        renderNextButton={()=> buttonLabelNext("Next")}
        renderSkipButton={()=> buttonLabelSkip("Skip")}
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
    <PracticeProvider>
      <NavigationContainer>
      
        <StackSelector />
      </NavigationContainer>
    </PracticeProvider>
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
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset:{
        width:0,
        height:3,
    },
    shadowOpacity:0.1,
    shadowRadius:3,
    elevation:1,
}
});
export default App;
