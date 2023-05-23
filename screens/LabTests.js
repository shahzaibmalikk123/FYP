import React from "react";
//import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
    StyleSheet,
    ImageBackground,
    useState,
    ScrollView,
} from "react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import { useFonts } from "expo-font";
import { PracticeProvider, ContextP } from "../context";
import { useStateContext } from "../context";

export const LabTests = ({ navigation }) => {
    const { LabsData, setLabsData } = useStateContext();
    function CloseHome() {
        setShowHomePage(true);
    }

    const categoryData = [
        {
            testId: 1,
            name: "Blood Glucose Test",
            description:
                "A blood glucose test measures the amount of glucose (sugar) in the blood. It is used to diagnose diabetes and monitor blood sugar levels in people with diabetes. The procedure involves pricking the finger with a lancet to obtain a small blood sample. The sample is then placed on a test strip, which is inserted into a glucose meter. The meter provides a reading of the blood glucose level. Blood glucose tests can be done at home as part of a routine diabetes management plan or if a person is experiencing symptoms of diabetes, such as increased thirst, urination, or hunger.",
            photo: icons.blood,
            image:images.bloodclotting,
            price: 20,
            conductiveAtHome: true,
            details:
                "Diabetes is a chronic disease that affects how your body processes glucose, a type of sugar, in your blood. If you have diabetes, your body either doesn't make enough insulin, which is a hormone that regulates blood sugar, or doesn't use insulin effectively. This can lead to high blood sugar levels, which can damage organs, nerves, and blood vessels over time. Common symptoms of diabetes include increased thirst, frequent urination, blurry vision, fatigue, and slow healing of cuts and wounds. Diabetes can be managed with medication, lifestyle changes, and regular monitoring of blood sugar levels.",
        },
        {
            testId: 2,
            name: "Cholesterol Test",
            description:
                "A cholesterol test measures the amount of cholesterol and other fats in the blood. High levels of cholesterol can increase the risk of heart disease and stroke. The procedure involves pricking the finger with a lancet to obtain a small blood sample. The sample is then placed on a test strip, which is inserted into a cholesterol meter. The meter provides a reading of the cholesterol level. Cholesterol tests can be done at home as part of a routine cholesterol management plan or if a person is at risk of developing heart disease or stroke.",
            photo: icons.diabetes,
            image:images.cancer,
            price: 25,
            conductiveAtHome: true,
            details:
                "Cholesterol is a waxy substance that is produced by your liver and is found in many foods. It is important for the production of hormones and for the proper functioning of your cells. However, high levels of cholesterol in your blood can increase your risk of developing heart disease and stroke. This is because cholesterol can build up in the walls of your arteries and form plaques, which can narrow or block blood flow. Common risk factors for high cholesterol include a diet high in saturated and trans fats, lack of physical activity, smoking, and obesity. Cholesterol can be managed with lifestyle changes and medication.",
        },
        {
            testId: 3,
            name: "COVID-19 Test",
            description:
                "A COVID-19 test detects the presence of the SARS-CoV-2 virus that causes COVID-19. It is used to diagnose COVID-19. The procedure involves collecting a sample from the nose or throat using a swab. The sample is then sent to a laboratory for analysis. COVID-19 tests can be done at home using a self-administered test kit or at a doctor's office or clinic.",
            photo: icons.coronavirus,
            image:images.coronatest,
            price: 50,
            conductiveAtHome: true,
            details:
                "COVID-19 is an infectious disease caused by the SARS-CoV-2 virus. The disease was first identified in Wuhan, China, in December 2019, and hassince spread globally, causing a pandemic. Common symptoms of COVID-19 include fever, cough, fatigue, and difficulty breathing. The virus spreads mainly through respiratory droplets when an infected person talks, coughs, or sneezes. It can also spread by touching a surface contaminated with the virus and then touching one's face. COVID-19 can be prevented by practicing good hygiene, such as washing hands frequently, wearing a mask, and practicing physical distancing. Vaccines are also available to prevent COVID-19 and reduce the severity of illness.",
        },
        {
            testId: 4,
            name: "Strep Throat Test",
            description:
                "A strep throat test detects the presence of the group A Streptococcus bacteria that can cause strep throat. The procedure involves using a cotton swab to collect a sample from the back of the throat. The sample is then sent to a laboratory for analysis. Strep throat tests can be done at home using a self-administered test kit or at a doctor's office or clinic.",
            photo: icons.cancer,
            image:images.bloodtest,
            price: 30,
            conductiveAtHome: true,
            details:
                "Strep throat is a bacterial infection that can cause sore throat, fever, and swollen lymph nodes in the neck. It is caused by the group A Streptococcus bacteria, which can be spread through respiratory droplets when an infected person talks, coughs, or sneezes. Strep throat can be treated with antibiotics, which can reduce the severity and duration of symptoms and prevent complications such as rheumatic fever. Good hygiene, such as washing hands frequently and avoiding close contact with people who are sick, can also help prevent the spread of strep throat.",
        },
        
    ];
    // price rating
    const poor = 2;
    const average = 3.5;
    const veryGood = 5;

    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategory, setSelectedCategory] = React.useState(" ");
    const [medicines, setMedicines] = React.useState(LabsData);
    function onSelectCategory(category) {
        //let medicineList = medicineData.filter( a => a.categories.includes(category.id))
        //setMedicines(medicineList)
        setSelectedCategory(category);
    }

    let fontsLoaded;
    fontsLoaded = useFonts({
        "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    });
    function renderHeader() {
        return (
            <View
                style={{
                    height: 50,
                    flexDirection: "row",
                }}
            >
                <Pressable
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        CloseHome;
                    }}
                >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{ width: 30, height: 30,  }}
                    />
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
                            height: "80%",
                            width: "70%",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: COLORS.lightGray,
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text
                            style={{
                                color: "teal",
                                fontSize: SIZES.h4,
                                fontWeight: "bold",
                            }}
                        ></Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => navigation.navigate("Search")}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={icons.search_2}
                        resizeMode="contain"
                        resizeMethod="resize"
                        style={{ width: 30, height: 30, tintColor: "teal" }}
                    />
                </Pressable>
            </View>
        );
    }
    function renderMedPic() {
        return (
            <View
                style={{
                    width: "100%",
                    height: "40%",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignContent: "center",
                    paddingTop: 0,
                }}
            >
                <Pressable
                    style={{ padding: SIZES.padding * 2, paddingBottom: 0 }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "80%",
                            borderRadius: 30,
                        }}
                        resizeMode="cover"
                        source={images.labtest4}
                    />
                </Pressable>
                <View
                    style={{
                        position: "absolute",
                        width: "40%",
                        height: "56%",
                        left: 60,
                        bottom: 60,
                        top: 40,
                        flexWrap: "wrap",
                        
                    }}
                >
                    <View>
                        <Text style={{fontWeight:'800',fontSize:SIZES.h2}}>
                            SAVE UP
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding * 0,
                            flexDirection: "column",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "800",
                                fontSize: SIZES.h5,
                                color: "teal",
                                paddingBottom: 0,
                            }}
                        >
                            Get 10% Off On Checkups
                        </Text>
                        <Text style={{paddingBottom:10}}>
                            on all tests and packages
                        </Text>
                        
                        <Pressable
                            style={{
                                height: "35%",
                                backgroundColor: "#F0846D",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "70%",
                                paddingHorizontal: 10,
                                borderRadius: 10,
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", color: "white" }}
                            >
                                Read More
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <View
                    style={{
                        paddingLeft: SIZES.padding * 2,
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: SIZES.h2 }}>
                        Top Diagnostic tests                    </Text>
                </View>
            </View>
        );
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                
                <View
                    style={{
                        padding: SIZES.padding *1 ,
                        marginTop: 10,
                        //paddingLeft: SIZES.padding * 0.5,
                        flex: 1,
                        backgroundColor:'white',
                        alignItems:'center',
                        //backgroundColor:(selectedCategory?.id == item.id) ? COLORS.teel : COLORS.lightGray,
                        
                        borderRadius: 20,
                        
                        
                        marginRight: SIZES.padding,
                        ...styles.shadow,
                        flexDirection: "column",
                        width: 230,
                        height: "100%",
                        flexWrap: "wrap",
                    }}
                    //onPress={() => onSelectCategory(item)}
                >
                    <View style={{height:'33%',width:'100%',paddingLeft:0,justifyContent:'center',}}>
                        <View>
                            <Image
                                source={item.photo}
                                resizeMode="contain"
                                style={{ width: "100%", height: "90%" }}
                            />
                        </View>
                        

                    </View>

                    <View style={{height:'36%', width:'100%',flexDirection:'column',paddingVertical:5,}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h3}}>
                            {item.name}
                        </Text>
                        <Text style={{lineHeight:16}} ellipsizeMode='tail' numberOfLines={4}>
                            {item.description}
                        </Text>
                        

                    </View>
                    <View style={{height:'14%', width:'100%',}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>
                            Rs {item.price}
                        </Text>

                    </View>
                    <Pressable
                        onPress={() =>
                            navigation.navigate("LabTestsDetails", {
                                item,
                            })
                        }
                    
                        style={{height:'17%', width:'100%',backgroundColor:'teal',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Text style={{fontWeight:'700',color:'white'}}>Book now</Text>
                    </Pressable>
                    
                </View>
                
            );
        };
        return (
            <View
                style={{
                    padding: SIZES.padding * 2,
                    paddingTop: 0,
                    paddingBottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "45%",
                    
                }}
            >
                <FlatList
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.testId}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 1.5,
                        paddingTop: 0,
                    }}
                />
                
            </View>
        );
    }
    
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMedPic()}
            {renderMainCategories()}
            {/* {renderMedicines()} */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: COLORS.lightGray4,
        backgroundColor: COLORS.lightGray,
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

export default LabTests;
