import React, { useContext, useEffect, useState, createContext } from "react";
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updatePassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import auth from '@react-native-firebase/auth';
//import { auth } from "../firebase";

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
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
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
        // eslint-disable-next-line
    }, []);

    const value = {
        setCurrentUser,
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        changePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
