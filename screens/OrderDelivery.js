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
} from "react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import { isIphoneX } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/Ionicons";
import { isLoaded } from "expo-font";
import { useStateContext } from "../context";
import { useContext } from "react";

export const OrderDelivery = ({ route, navigation }) => {
    const poor = 2;
    const average = 3.5;
    const veryGood = 5;

    const { buyData, medicineData, setBuyData } = useStateContext();
    const [medicines, setMedicines] = React.useState(null);
    const [modal, setModal] = React.useState(false);
    const [itemsModal, setItemsModal] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);
    const [itemCounts, setItemCounts] = React.useState([]);
    const [totals, setTotals] = React.useState([]);
    const [fav, setFav] = React.useState("");
    const [cartData, setCartData] = React.useState([]);

    // state to hold the quantity of the item
    const [quantity, setQuantity] = React.useState(0);

    const { item } = route.params;

    // store the medicines data in the state
    React.useEffect(() => {
        
        setMedicines(item);
    });

    function openModal() {
        setModal(true);
    }
    function closeModal() {
        setModal(false);
    }
    function closeItemsModal() {
        setItemsModal(false);
    }

    // adding item to cart
    function addingItems() {
        if (quantity > 0) {
            // check if the item is already in the cart
            let orderItem = buyData.find(
                (existingItem) => existingItem.id == item.id
            );

            // if the item is already in the cart, increase the quantity else add the item to the cart
            if (orderItem) {
                setBuyData([
                    ...buyData.filter(
                        (existingItem) => existingItem.id != item.id
                    ),
                    { id: item.id, quantity: orderItem.quantity + quantity },
                ]);
            } else {
                setBuyData([...buyData, { id: item.id, quantity: quantity }]);
            }
            // reset the quantity
            setQuantity(0);
        }

        setItemsModal(true);
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

    function editOrder(action, id, price) {
        if (action === "+") setQuantity(quantity + 1);
        else {
            if (quantity > 0) setQuantity(quantity - 1);
        }
    }

    // function getOrderqty(id) {
    //     let orderItem = orderItems.filter((a) => a.id == id);
    //     if (orderItem.length > 0) {
    //         return orderItem[0].qty;
    //     }
    //     return 0;
    // }
    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);
        return itemCount;
    }

    function sumOrder() {
        let total = 0;
        buyData.map((item) => {
            let medicine = medicineData.find((a) => a.id == item.id);
            total += Number(medicine.price * item.quantity);
        });
        return total || 0;
    }
    function closeAndNavigate() {
        setItemsModal(false);
        let ord = sumOrder();
        let itemC = getBasketItemCount();
        navigation.navigate("Checkout", { medicines, buyData, ord, itemC , cartData});
    }
    function addFav() {}
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
    function renderMedicineInfo() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                }}
            >
                <View
                    style={{
                        height: "45%",
                        width: "100%",
                        borderRadius: 0,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View style={{ width: "100%", height: "100%" }}>
                        <Image
                            resizeMode="contain"
                            source={{ uri:  medicines?.photo}}
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: 0,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                        backgroundColor: "white",
                    }}
                >
                    <View
                        style={{
                            height: "55%",
                            width: "100%",
                            backgroundColor: COLORS.lightGray,
                            alignItems: "center",
                            borderTopRightRadius: 35,
                            borderTopLeftRadius: 35,
                            padding: SIZES.padding * 2,
                            paddingBottom: 20,
                            ...styles.shadow,
                            borderWidth: 0.1,
                            borderColor: "lightgrey",
                        }}
                    >
                        <View
                            style={{
                                height: "30%",
                                width: "100%",
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "35%",
                                    flexDirection: "row",
                                }}
                            >
                                <View
                                    style={{
                                        width: "70%",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: SIZES.body2,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        {medicines?.name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: "center",
                                        flex: 1,
                                        alignItems: "flex-end",
                                        paddingRight: 10,
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <Pressable
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 30,
                                            paddingHorizontal: 10,
                                            paddingVertical: 3,
                                            borderColor: "#F0846D",
                                            borderWidth: 2,
                                            backgroundColor: "white",
                                        }}
                                        onPress={() =>
                                            editOrder(
                                                "-",
                                                item?.id,
                                                item?.price
                                            )
                                        }
                                    >
                                        <Text
                                            style={{
                                                fontSize: SIZES.body2,
                                                fontWeight: "bold",
                                                color: "#F0846D",
                                            }}
                                        >
                                            -
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: "100%",
                                    height: "30%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View
                                    style={{
                                        width: "70%",
                                        alignItems: "center",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Icon
                                        name="cart-outline"
                                        size={20}
                                        color="teal"
                                    />
                                    <Text
                                        style={{
                                            fontSize: SIZES.h5,
                                            fontWeight: "bold",
                                            paddingLeft: 5,
                                            color: "teal",
                                        }}
                                    >
                                        Shopping
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: "center",
                                        flex: 1,
                                        alignItems: "flex-end",
                                        paddingRight: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 20,
                                            height: "80%",
                                            width: "35%",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: SIZES.h4,
                                            }}
                                        >
                                            {quantity}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: "100%",
                                    height: "35%",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                            >
                                <View
                                    style={{
                                        width: "70%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: 8,
                                        paddingVertical: 8,
                                        paddingLeft: 0,
                                    }}
                                >
                                    {/* <Image
                                        source={icons.star}
                                        resizeMode='contain'
                                        style={{
                                            width: '13%', height: '50%'
                                        }}
                                    /> */}
                                    <Text
                                        style={{
                                            fontSize: SIZES.h5,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {[1, 2, 3, 4, 5].map((priceRating) => (
                                            <Image
                                                source={icons.star}
                                                resizeMode="cover"
                                                key={priceRating}
                                                style={{
                                                    height: 20 || "100%",
                                                    width: 20,
                                                    ...FONTS.body3,
                                                    tintColor:
                                                        priceRating <=
                                                        medicines?.priceRating
                                                            ? "#F4CB04"
                                                            : "lightgray",
                                                }}
                                            />
                                        ))}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: "center",
                                        flex: 1,
                                        alignItems: "flex-end",
                                        paddingRight: 10,
                                    }}
                                >
                                    <Pressable
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderColor: "#F0846D",
                                            borderWidth: 2,
                                            borderRadius: 30,
                                            paddingHorizontal: 8,
                                            paddingVertical: 2,
                                            backgroundColor: "white",
                                        }}
                                        onPress={() =>
                                            editOrder(
                                                "+",
                                                item?.id,
                                                item?.price
                                            )
                                        }
                                    >
                                        <Text
                                            style={{
                                                fontSize: SIZES.body2,
                                                fontWeight: "bold",
                                                color: "#F0846D",
                                            }}
                                        >
                                            +
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                height: "40%",
                                width: "100%",
                                paddingTop: 5,
                            }}
                        >
                            <Text
                                
                                style={{
                                    fontSize: SIZES.h5,
                                    fontWeight: "bold",
                                    paddingBottom: 10,
                                    paddingTop: 10,
                                }}
                            >
                                Product Detail
                            </Text>
                            <View>
                                <Text numberOfLines={5} ellipsizeMode='tail'  >{medicines?.description}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                height: "30%",
                                width: "100%",
                            }}
                        >
                            <View
                                style={{
                                    height: "30%",
                                    width: "100%",
                                    flexDirection: "row",
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: SIZES.body2,
                                    }}
                                >
                                    $
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: SIZES.body2,
                                    }}
                                >
                                    {medicines?.price}
                                </Text>
                            </View>
                            <View
                                style={{
                                    height: "70%",
                                    width: "100%",
                                }}
                            >
                                <View
                                    style={{ width: "100%", height: "25%" }}
                                ></View>
                                <View
                                    style={{
                                        height: "75%",
                                        width: "100%",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            height: "100%",
                                            width: "15%",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Pressable
                                            style={{
                                                backgroundColor: "#F0846D",
                                                height: "100%",
                                                width: "90%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: 20,
                                            }}
                                        >
                                            <Image
                                                source={icons.heart}
                                                resizeMode="contain"
                                                style={{
                                                    height: 20 || "60%",
                                                    width: "60%",
                                                    tintColor: "white",
                                                }}
                                            />
                                        </Pressable>
                                    </View>
                                    <View
                                        style={{
                                            height: "100%",
                                            width: "3%",
                                        }}
                                    ></View>
                                    
                                    <Pressable
                                        onPress={() => addingItems()}
                                        style={{
                                            height: "100%",
                                            width: "82%",
                                            backgroundColor: "#2A8C8D",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            borderRadius: 20,
                                        }}
                                    >
                                        <Image
                                            source={icons.cart}
                                            resizeMode="contain"
                                            style={{
                                                height: 40 || "40%",
                                                width: "15%",
                                                padding: 5,
                                                tintColor: "white",
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: SIZES.h3,
                                                color: "white",
                                            }}
                                        >
                                            Add to Basket
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
               

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
                                    onPress={() => closeItemsModal()}
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
                                    style={{ ...FONTS.h3, fontWeight: "bold" }}
                                >
                                    Order Details
                                </Text>
                                <Pressable
                                    onPress={() => closeItemsModal()}
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
                                    style={{ ...FONTS.h3, fontWeight: "bold" }}
                                >
                                    {buyData.length > 1
                                        ? buyData.length + " items"
                                        : buyData.length + " item"}{" "}
                                    in cart
                                </Text>
                                <Text
                                    style={{ ...FONTS.h3, fontWeight: "bold" }}
                                >
                                    ${sumOrder()}
                                </Text>
                            </View>
                            {/* View containing list of individual medicines and their subtotal */}
                            <ScrollView  scrollEnabled={true}>
                                <View >
                                {buyData &&
                                    cartData?.map((item, index) => (
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
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMedicineInfo()}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: COLORS.lightGray4,
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
export default OrderDelivery;
