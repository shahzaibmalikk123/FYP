import React, { useEffect } from "react";
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
    ScrollView,
    Modal,
    Platform,
} from "react-native";
import axios, { Axios } from "axios";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import axiosInstance from "../axios/axiosInstance";
import { PracticeProvider, ContextP } from "../context";
import { useStateContext } from "../context";

export const Appointments=({ route, navigation })=>{
    
    const [appointmentList, setAppointmentList] = React.useState([]);
    const { appointments } = route.params;
    const { findUser,currentUser, doctors, setDoctors, getDoctors } = useStateContext();
    const [user, setUser]= React.useState({})

    React.useEffect(() => {
        // const getAppointments = async () =>{
        //   try{
        //     const response = await axiosInstance.get("appointments/populate");
        //     console.log(response.data[1])
        //     setAppointmentList(response.data)
            
        //   }
        //   catch(error){
        //     console.log(error);

        //   }
        // };
        
        
        const getAppointments = async () =>{
          const user = await findUser(currentUser?.email);
          if(!user) return;
          console.log('Fetching appointments for user:', user._id); // for debugging purposes only
          await axiosInstance.get(`appointments/${user._id}/patient`).then( res => 
          
            {
              console.log("the response we are getting is ",res.data)
              setAppointmentList(res.data)
              console.log('Appointments fetched:', res.data); // for debugging purposes only
          })
        }
        // const userAppointments = async () => {
        //   try{
        //     console.log(currentUser.email)
        //     const user = await findUser(currentUser.email)
        //     setMatchedUser(user)
        //     console.log("Matched User: ", matchedUser);
        //   }
        //   catch(error){
        //     console.log(error)

        //   }
          
        // }
        // userAppointments();
        //getUser();
        getAppointments();
    }, []);
    console.log(appointmentList)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',height:"8%",alignItems:'center',}}>
              <Pressable
                    style={{
                        width: "15%",
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
                <View style={{width:'80%',alignItems:'center',justifyContent:'center',}}>
                  <Text style={styles.heading}>My Appointments</Text>
                </View>
            </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {appointmentList && appointmentList.map((appointment, index) => (
              
              
              <View key={appointment._id} style={styles.appointmentContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Appointment ID</Text>
                  <Text style={styles.value}>{appointment?.appointment_id}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Doctor name</Text>
                  <Text style={styles.value}>{
                    doctors.find(doctor => doctor._id === appointment.doctor_id)?.name || "Doctor"
                    
                  }
                  </Text>
                  {/* <Text style={styles.value}>{appointment?.doctor_id}</Text> */}
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Patient id</Text>
                  <Text style={styles.value}>{appointment?.patient_id}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Date</Text>
                  <Text style={styles.value}>{appointment?.date}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Time</Text>
                  <Text style={styles.value}>{appointment?.time}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Status</Text>
                  <Text style={[styles.value, { color: "red" }]}>
                    {appointment?.status}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color:'teal'
      },
      scrollContainer: {
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
      },
      appointmentContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginBottom: SIZES.padding,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        
      },
      infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SIZES.base,
        flexWrap: 'wrap',
      },
      title: {
        ...FONTS.h3,
        color: COLORS.gray,
        fontWeight:'bold'
      },
      value: {
        ...FONTS.h3,
        color: COLORS.black,
      },
    });
    
    export default Appointments;