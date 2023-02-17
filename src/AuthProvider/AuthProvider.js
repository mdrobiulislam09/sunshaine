import React, { createContext, useEffect, useState } from 'react';
import {  getAuth,  onAuthStateChanged,  signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logOut = () => {
        return signOut(auth)
    }

    const loginGoogle = (provider)=> {
        return signInWithPopup(auth, provider)
    }

    // const updateUser = (userInfo) => {
    //     return updateProfile(auth.currentUser, userInfo)
    // }

    const authInfo = {
        
        logOut,
        user,
        loginGoogle,
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
        });
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;