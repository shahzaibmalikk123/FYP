 import React from 'react';
 import { FaBeer } from 'react-icons/fa';
 import { IconName } from "react-icons/fc";
 import Svg, { Path } from 'react-native-svg';
 import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
 //import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import {
    View,
    Image,
    TouchableOpacity,
    Pressable,
    Alert
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { OrderDelivery } from "../screens/OrderDelivery";
import {Cart} from "../screens/Cart";
import { Search } from "../screens/Search";
import {Checkout} from "../screens/Checkout";
import {Login} from "../screens/Login";
import{Profile} from "../screens/Profile";
import { LabTests } from '../screens/LabTests';

import { COLORS, icons } from "../constants";
const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    const [selectedTab, setSelectedTab] = React.useState(true);
    
    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center",backgroundColor: selectedTab ? 'teal' : "teal" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0, backgroundColor: COLORS.teel }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={70}
                        height={61}
                        viewBox="0 0 75 61"
                        
                        
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white,  }}></View>
                </View>

                <Pressable
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        borderWidth:0.2,
                        borderColor:"lightgrey",
                        
                    }}
                    onPress={onPress}
                >
                    {children}
                </Pressable>
            </View>
        )
    } else {
        return (
            <Pressable
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </Pressable>
        )
    }
}
const CustomTabBar = (props)=>{
    if(isIphoneX()){
    return(
        <View>
            <View style={{
                position: 'absolute',
                bottom:0,
                left:0,
                right:0,
                height:30,
                backgroundColor: COLORS.teel
            }}>

            </View>
                <BottomTabBar  {...props.props}/>
            
        </View>
    )
    }
    else{
        return(
        <BottomTabBar  {...props.props}/>
        );
        
    }
    

}
const Tabs = () => {
    
    
    return (
        <Tab.Navigator
           
            screenOptions={{
                tabBarShowLabel:false,
                headerShown:false,
                
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor:'teal',
                    elevation: 0,
                        
                },
                tabBarStyle: { backgroundColor: "teal" }, 
                
            }}
            
            tabBar={(props) => (
                <CustomTabBar 
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home_2}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.teel : COLORS.secondary,
                                
                                
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search_2}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.teel : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Tests"
                component={LabTests}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.tests}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.teel : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="User"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.teel : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
        
    )
}

export default Tabs