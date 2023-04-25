import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

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

    const info = {
        userCreate,
        userSignIn,
        providerLogIn
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;