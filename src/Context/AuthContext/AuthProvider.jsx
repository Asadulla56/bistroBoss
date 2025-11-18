import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './../../Firebace/Firebace.init';
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setuser]=useState()
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = ()=>{
    return signInWithPopup(auth,provider)
  }
  const fbLogin = ()=>{
    return signInWithPopup(auth,fbProvider)
  }
  const gitLogin = ()=>{
    return signInWithPopup(auth,githubProvider)
  }
  const signupUser = ( email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signinUser = ( email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           
      setUser(currentUser)
  })
  return ()=>{
      unsubscribe()
  }
  },[])
  const signoutUser = ()=>{
    
    signOut(auth)
    .then(()=>{
        alert('logout')   
    })
    .catch(error=> console.log(error))
}
    const authInfo = {
      googleLogin,
      fbLogin,
      gitLogin,
      signupUser,
      signinUser,
      signoutUser,
      user,

    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;