import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  // register user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout
  const logout = () => {
    return signOut(auth);
  }

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    registerUser,
    loginUser,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
