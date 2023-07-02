import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import app from '../../src/Firebase/Firebae.config';
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(false)
    const [roomInfo,setRoomInfo] = useState({})
    const [dates, setDates] = useState([])
    const [refetch,setRefetch] = useState('')
    const createUser =(email, password) =>{
      return  createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);

    }
    
    const updateUser =(userInfo)=>{
        setLoading(true)
        return updateProfile (auth.currentUser, userInfo)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsSubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=> unsSubscribe()
    },[])
    const value = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        roomInfo,
        setRoomInfo,
        setRefetch,
        refetch,
        dates,
        setDates
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;