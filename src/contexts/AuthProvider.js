import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user
    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in other ways
    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // update user profile
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // logout user
    const userLogOut = () => {
        return signOut(auth);
    };

    const info = {
        user,
        userCreate,
        userSignIn,
        providerLogIn,
        userProfileUpdate,
        userLogOut
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;