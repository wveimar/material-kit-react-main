import { createContext,useState,useEffect} from "react";
import { auth } from "src/utils/FirebaseUtil";



export const AuthPrivider = (props) =>{
  const [currentUser, setCurrentUser] = use =>{

  }
  const signup = (email,password) =>{
    return auth.createUserWithEmailAndPassword(email,password)
  }
  const login = (email,password) =>{
    return auth.singInWithEmailAndPassword(email,password)
  }
  const logout = (email,password) =>{
  const value = {signup,login,logout}
  }
  const value = {};
  return(
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
