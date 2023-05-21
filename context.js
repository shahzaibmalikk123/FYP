import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data/Medicines";

import { LabData } from "./data/LabData";
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updatePassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";
import axiosInstance from "./axios/axiosInstance";

const ContextP = createContext();

export const PracticeProvider = ({ children }) => {
    const [buyData, setBuyData] = useState([]);
    const [medicineData, setMedicine] = useState([]);
    const [LabsData, setLabsData] = useState(LabData)
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [loggedInUser,setLoggedInUser] = useState({});
    const [doctors, setDoctors] = React.useState({})

   
    

    // to find the user details in the db
    const findUser = async (email) => {
        const user = await axiosInstance.get("users").then(async (res) => {
            const data = await res.data;
            return data.find((user) => user.email === email);
            
        });
        return user;
        
    };
    

    function signup(auth, email, password,username) {
        return createUserWithEmailAndPassword(auth, email, password).then( async ()=> {
            
           await updateProfile(auth.currentUser || currentUser,{
                displayName :username,
            });
            console.log(auth.currentUser)
        }
        )
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorCode , errorMessage);
        });
    }

    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logout() {
        auth.signOut();
    }

    function resetPassword(auth, email) {
        return sendPasswordResetEmail(auth, email);
    }

    function changePassword(currentUser, password) {
        return updatePassword(currentUser, password);
    }

    useEffect(() => {
        const getMedicines = async () =>{
            
            
            
            await axiosInstance.get(`medicines`).then( res => 
            
              {
                
                
                setMedicine(res.data.map(med =>
                    {
                        return(
                            {...med, id:med._id}
                        )
                    }))
                
            })
          }

        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        const getDoctors = async () => {
            await axiosInstance
                .get("doctors")
                .then((res) => setDoctors(res.data))
                .catch((err) => console.log(err));
        };
        
        getMedicines();
        getDoctors();
        return unsubscribe;
        // eslint-disable-next-line
    }, []);

    if (medicineData)
        return (
            <ContextP.Provider
                value={{ medicineData, setMedicine, buyData, setBuyData,LabsData, setLabsData, currentUser, signup,login,loginWithGoogle, logout,resetPassword,changePassword ,findUser , doctors, setDoctors}}
            >
                {children}
            </ContextP.Provider>
        );
};

export const useStateContext = () => useContext(ContextP);
