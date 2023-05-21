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
    Modal,
} from "react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { PracticeProvider, ContextP } from "../context";
import { useStateContext } from "../context";
import axiosInstance from "../axios/axiosInstance";
import { isIphoneX } from "react-native-iphone-x-helper";

export const Home = ({ navigation }) => {
    const { buyData, medicineData } = useStateContext();
    const [medicines, setMedicines] = React.useState([]);
    const poor = 2;
    const average = 3.5;
    const veryGood = 5;

    const [itemsModal, setItemsModal] = React.useState(false);
    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategory, setSelectedCategory] = React.useState(" ");
    const [filteredMedicines, setFilteredMedicines] = React.useState([]);
    const [allMedShow, setAllMedShow] = React.useState(true);
    function CloseHome() {
        setShowHomePage(true);
    }
    function onSelectCategory(category) {
        //let medicineList = medicines.filter( (item) => item.category.includes(category.name))
        //setMedicines(medicineList)

        if (category.name === "all") setFilteredMedicines(medicines);
        else {
            const filteredMedicines = medicines.filter((item) => {
                return (
                    item.category.trim().toLowerCase() ===
                    category.name.trim().toLowerCase()
                );
            });
            setFilteredMedicines(filteredMedicines);
        }

        setSelectedCategory(category);
    }
    React.useEffect(() => {
        const getMedicines = async () => {
            await axiosInstance.get(`medicines`).then((res) => {
                setMedicines(
                    res.data.map((med) => {
                        return { ...med, id: med._id };
                    })
                );

                setFilteredMedicines(
                    res.data.map((med) => {
                        return { ...med, id: med._id };
                    })
                );
            });
        };

        getMedicines();
    }, []);

    const categoryData = [
        {
            id: 6,
            name: "all",
            icon: icons.suppositories,
        },
        {
            id: 1,
            name: "syrup",
            icon: icons.liquids,
        },
        {
            id: 2,
            name: "tablet",
            icon: icons.tablets,
        },
        {
            id: 3,
            name: "capsule",
            icon: icons.capsules,
        },
        {
            id: 4,
            name: "topical",
            icon: icons.topical,
        },
        {
            id: 5,
            name: "drop",
            icon: icons.drops,
        },

        {
            id: 7,
            name: "inhaler",
            icon: icons.inhaler,
        },
        {
            id: 8,
            name: "injection",
            icon: icons.injections,
        },
    ];

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
                        style={{ width: 40, height: 40 }}
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
                    onPress={() => setItemsModal(true)}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={icons.cartIcon}
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
                    height: "30%",
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
                            height: "90%",
                            borderRadius: 30,
                            backgroundColor: "teal",
                        }}
                        resizeMode="cover"
                        source={images.booknow}
                    />
                </Pressable>
                <View
                    style={{
                        position: "absolute",
                        width: "40%",
                        height: "50%",
                        left: 60,
                        bottom: 60,
                        top: 40,
                        flexWrap: "wrap",
                    }}
                >
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
                                paddingBottom: 10,
                            }}
                        >
                            How to Save your life from COVID-19
                        </Text>
                        <Pressable
                            style={{
                                height: "45%",
                                backgroundColor: "#F0846D",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "70%",
                                padding: 10,
                                borderRadius: 30,
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
                        Categories
                    </Text>
                </View>
            </View>
        );
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <Pressable
                    style={{
                        padding: SIZES.padding * 0.5,
                        marginTop: 10,
                        paddingLeft: SIZES.padding * 0.5,
                        flex: 1,
                        justifyContent: "center",
                        //backgroundColor:(selectedCategory?.id == item.id) ? COLORS.teel : COLORS.lightGray,
                        backgroundColor:
                            selectedCategory?.id == item.id
                                ? "#22BFB4"
                                : COLORS.lightGray,
                        borderRadius: 20,
                        alignItems: "center",
                        //justifyContent:'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow,
                        flexDirection: "column",
                        width: 120,
                        height: "100%",
                        flexWrap: "wrap",
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "10%",
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                                selectedCategory?.id == item.id
                                    ? "#22BFB4"
                                    : COLORS.lightGray,
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{ width: "70%", height: "70%" }}
                            resizeMode="contain"
                        />
                    </View>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 80,
                            padding: 0,
                        }}
                    >
                        <Text
                            numberOfLines={1}
                            style={{
                                color: COLORS.black,
                                flexWrap: "nowrap",
                                ...FONTS.body5,
                                fontWeight: "bold",

                                color:
                                    selectedCategory?.id == item.id
                                        ? COLORS.white
                                        : COLORS.black,
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Pressable>
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
                    height: "28%",
                }}
            >
                <FlatList
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 1.5,
                        paddingTop: 0,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",

                        alignItems: "center",
                        width: "100%",
                        height: 35,
                    }}
                >
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text
                            style={{ fontWeight: "bold", fontSize: SIZES.h4 }}
                        >
                            New Medicines
                        </Text>
                    </View>
                    <Pressable
                        onPress={() => navigation.navigate("Search")}
                        style={{ alignItems: "flex-end" }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: SIZES.h5,
                                color: "#B9B9B9",
                            }}
                        >
                            See all
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    }
    function renderMedicines() {
        return (
            <ScrollView>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        paddingBottom: SIZES.padding * 4,
                        backgroundColor: COLORS.lightGray,
                        borderTopRightRadius: 35,
                        borderTopLeftRadius: 35,
                    }}
                >
                    {filteredMedicines?.map((item, index) => {
                        return (
                            <View
                                key={item?.id}
                                style={{
                                    width: "50%",
                                    padding: SIZES.padding * 2,
                                    borderRadius: SIZES.radius,
                                    paddingBottom: 5,
                                }}
                            >
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("OrderDelivery", {
                                            item,
                                        })
                                    }
                                    style={{
                                        flex: 1,
                                        backgroundColor: "white",
                                        borderRadius: SIZES.radius,
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: item?.photo || "",
                                        }}
                                        resizeMode="contain"
                                        style={{
                                            height: 200,
                                            width: "100%",
                                            borderRadius: 25,
                                        }}
                                    />
                                    <View
                                        style={{
                                            position: "absolute",
                                            bottom: 0,

                                            height: 50,
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            borderBottomLeftRadius: 25,
                                            borderTopRightRadius: 25,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            ...styles.shadow,
                                        }}
                                    >
                                        <Image
                                            source={icons.plus}
                                            style={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    </View>

                                    {/* <Text style={{
                        justifyContent:'center',alignContent:'center'
                    }}>{item.name}</Text> */}
                                </Pressable>
                                <View
                                    style={{
                                        height: 50,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                >
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            paddingBottom: 0,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    }

    function cartModal() {
        const [cartData, setCartData] = React.useState([]);

        function sumOrder() {
            let total = 0;
            buyData.map((item) => {
                let medicine = medicineData.find((a) => a.id == item.id);
                total += Number(medicine.price * item.quantity);
            });
            return total || 0;
        }

        React.useEffect(() => {
            let orderItems = buyData.map((item) => {
                let medicine = medicineData.find((a) => a.id == item.id);

                return {
                    photo: medicine.photo,
                    price: medicine.price,
                    name: medicine.name,
                    quantity: item.quantity,
                };
            });
            setCartData(orderItems);
        }, [buyData]);

        return (
            <ScrollView>
                <Modal
                    animationType="slide"
                    visible={itemsModal}
                    transparent={true}
                    onRequestClose={() => setItemsModal(false)}
                >
                    <Pressable
                        // onPress={() => closeItemsModal()}
                        style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,

                                width: "100%",
                                height: "60%",
                                justifyContent: "flex-start",
                                paddingBottom: 10,

                                // marginTop: 56,
                            }}
                        >
                            <View
                                style={{
                                    height: "25%",
                                    width: "100%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    paddingVertical: SIZES.padding * 0,
                                    paddingHorizontal: SIZES.padding * 3,
                                    borderBottomColor: COLORS.lightGray2,
                                    borderBottomWidth: 0,
                                    alignItems: "center",
                                    paddingTop: 20,
                                }}
                            >
                                <Pressable
                                    onPress={() => setItemsModal(false)}
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "60%",
                                        backgroundColor: "lightgray",
                                        borderRadius: 5,
                                    }}
                                >
                                    <Icon
                                        name="chevron-back-outline"
                                        size={30}
                                    />
                                </Pressable>
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Order Details
                                </Text>
                                <Pressable
                                    onPress={() => setItemsModal(false)}
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "60%",
                                        backgroundColor: "lightgray",
                                        borderRadius: 5,
                                    }}
                                >
                                    <Icon name="close-outline" size={30} />
                                </Pressable>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingVertical: SIZES.padding * 2,
                                    paddingHorizontal: SIZES.padding * 3,
                                    borderBottomColor: COLORS.lightGray2,
                                    borderBottomWidth: 1,
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {buyData.length > 1
                                        ? buyData.length + " items"
                                        : buyData.length + " item"}{" "}
                                    in cart
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        fontWeight: "bold",
                                    }}
                                >
                                    ${sumOrder()}
                                </Text>
                            </View>
                            {/* View containing list of individual medicines and their subtotal */}
                            <ScrollView scrollEnabled={true}>
                                <View>
                                    {buyData &&
                                        cartData?.map((item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent:
                                                        "space-between",
                                                    paddingHorizontal:
                                                        SIZES.padding * 3,
                                                    paddingVertical:
                                                        SIZES.padding,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Image
                                                        source={{
                                                            uri: item?.photo,
                                                        }}
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
                            {buyData.length > 0 && (
                                <View>
                                    {/* Order Button */}
                                    <View
                                        style={{
                                            padding: SIZES.padding * 2,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Pressable
                                            onPress={() => closeAndNavigate()}
                                            style={{
                                                width: SIZES.width * 0.9,
                                                padding: SIZES.padding,
                                                backgroundColor: COLORS.teel,
                                                alignItems: "center",
                                                borderRadius: SIZES.radius,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h2,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Go to checkout screen
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                            {isIphoneX() && (
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: -34,
                                        left: 0,
                                        right: 0,
                                        height: 34,
                                        backgroundColor: COLORS.white,
                                    }}
                                ></View>
                            )}
                        </View>
                    </Pressable>
                </Modal>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMedPic()}
            {renderMainCategories()}
            {renderMedicines()}
            {cartModal()}
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

export default Home;
