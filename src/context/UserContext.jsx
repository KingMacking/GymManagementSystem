import React, { createContext, useContext, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../firebase/config'

const auth = getAuth(app)

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const db = getFirestore()

    const getUserRole = async (uid) => {
        const docInfo = await getDoc(doc(db, 'users', uid))
        const userInfo = docInfo.data().role
        return userInfo
    }

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            if (!user){
                getUserRole(firebaseUser.uid)
                .then((role)=> {
                    const userData = {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        role: role
                    }
                    setUser(userData)
                })
            }
        } else {
            setUser(null)
        }
    })

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider