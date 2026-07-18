import { createContext, useEffect, useState } from "react";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth , db } from "../firebase/firebase.config";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";



export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Forgot Password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Update Profile
    const updateUser = (data) => {
        return updateProfile(auth.currentUser, data);
    };

    // verify email

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Logout
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin,
        resetPassword,
        updateUser,
        verifyEmail,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;