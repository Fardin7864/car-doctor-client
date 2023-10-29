import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const Authcontext = createContext();

const Authprovider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState();

    // providers
    const google = new GoogleAuthProvider();
    
    const createUserWithEmail = (email, pass) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
     }
    
    const socialLogin = () => { 
        setLoading(true)
         signInWithPopup(auth, google)
     }

    const loginWithEmail = (email, pass) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
     }

    const logOut = () => { 
        setLoading(true)
        return signOut(auth)
     }

    useEffect(() => { 
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => { 
            setLoading(true)
            setUser(currentUser);
            setLoading(false)
         })

         return () => { 
            unsubscribe();
          }
     },[])
    
    
    const authInfo = {
        google,
        createUserWithEmail,
        socialLogin,
        loginWithEmail,
        logOut,
        user,
        loading,
        
    }
    return <Authcontext.Provider value={authInfo} >{children}</Authcontext.Provider>;
};

export default Authprovider;