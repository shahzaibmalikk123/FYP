import React from 'react';
//import { StatusBar } from 'expo-status-bar';


import { TextInput,View,Text,SafeAreaView,Pressable,Image,FlatList,StyleSheet,ImageBackground,ScrollView,Alert} from 'react-native';

import { COLORS , icons,SIZES,images,FONTS} from '../constants';

export const Search=({navigation})=>{
    
    
    


    // price rating
    const poor = 2
    const average = 3.5
    const veryGood = 5
    const medicineData = [
        {
            id: 8,
            name: "Penicillin",
            rating: 4,
            priceRating: average,
            description:"Penicillin is an antibiotic. It is used to treat infections caused by bacteria. It does not work on viral infections (such as colds and flu).",
            categories: [5, 7],
            photo: images.Penicillin,
            duration: "30 - 45 min",
            price: 89,
            
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 9,
            name: "Polyfax",
            rating: 4,
            priceRating: veryGood,
            description:"Polyfax Ointment is used to help prevent infection of the skin following: • minor burns • a skin graft being taken • surgery • accidental cuts, scratches or scrapes.",
            categories: [5, 7],
            photo: images.polyfax,
            duration: "30 - 45 min",
            price: 89,
            
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 10,
            name: "Lisinopril",
            rating: 5,
            priceRating: veryGood,
            description:"Lisinopril is used to treat high blood pressure. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. It is also used to treat heart failure and to improve survival after a heart attack.",
            categories: [5, 7],
            photo: images.lisinopril,
            duration: "30 - 45 min",
            price: 89,
            
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 11,
            name: "Metformin",
            priceRating: poor,
            price: 64,
            rating: 4.8,
            description:"Metformin is used to treat type 2 diabetes, a condition that affects over 30 million Americans. When you have diabetes, your body can't produce enough insulin to keep your blood sugar at a normal level",
            categories: [3], 
            photo: images.metformin,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 12,
            name: "Metoprolol",
            priceRating: veryGood,
            price: 64,
            rating: 4.8,
            description:"Metoprolol is another medicine used to treat high blood pressure. It's also used to treat angina, which is a type of severe chest pain. It may lower the risk of having another heart attack in people who have already had one.",
            categories: [3], 
            photo: images.metoprolol,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 13,
            name: "Enalapril",
            rating: 4.8,
            priceRating: average,
            description:"Enalapril belongs to a group of medicines called calcium channel blockers and is used to treat high blood pressure. ",
            categories: [5, 7],
            photo: images.enalapril,
            duration: "30 - 45 min",
            price: 89,
            
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 1,
            name: "Panadol",
            rating: 4.8,
            priceRating: average,
            description:"Panadol can be used for relieving fever and/or for the treatment of mild to moderate pain including headache, migraine, muscle ache, dysmenorrhea, sore throat",
            categories: [5, 7],
            photo: images.capsule_cap,
            duration: "30 - 45 min",
            price: 89,
            
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Loperamide",
            rating: 4.8,
            description:"Loperamide is a medicine to treat diarrhoea (runny poo). It can help with short-term diarrhoea or irritable bowel syndrome (IBS). Loperamide is also used for recurring or longer lasting diarrhoea from bowel conditions",
            categories: [2, 4, 6],
            priceRating: veryGood,
            photo: images.tablet_tab,
            duration: "15 - 20 min",
            price: 75,
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Betnovate",
            priceRating: poor,
            price: 95,
            rating: 4.8,
            description:"Betnovate is used to treat various inflammatory skin conditions, including eczema, psoriasis, dermatitis, insect bites and prickly heat. ",
            categories: [3], 
            photo: images.topical_top,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Alcaine",
            priceRating: average,
            rating: 4.8,
            categories: [8],
            description:"Alcaine is a prescription medicine used to treat the symptoms of Foreign Bodies, Suture Removal and Deep Ophthalmic Anesthesia. Alcaine may be used alone or with other medications.",
            photo: images.drops_drop,
            price: 99,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Albuterol",
            priceRating: veryGood,
            rating: 4.8,
            price: 66,
            description:"Albuterol is used to treat bronchospasm, which is when your airways spasm and tighten and make it hard to breathe. Bronchospasms can happen when you have asthma, bronchitis, emphysema, and other lung diseases.",
            categories: [1, 2],
            photo: images.albuterol,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    
                },

            ]
        },
        {

            id: 6,
            priceRating: poor,
            name: "Omeprazole",
            rating: 4.9,
            price: 65,
            description:"Omeprazole is used to treat conditions that result from too much acid in your stomach. It's a proton pump inhibitor (PPI), which reduces the amount of acid your stomach produces.",
            categories: [9, 10],
            photo: images.omeprazole,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                   
                }
            ]

        }



    ]

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
                                source={item.photo}
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
