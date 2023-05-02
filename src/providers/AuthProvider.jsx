import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

  // register user
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // google sign in
  const googleLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  }

  // github login
  const githubLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  }

  // logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  }

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoader(false);
    });
    return () => {
        unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loader,
    registerUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
