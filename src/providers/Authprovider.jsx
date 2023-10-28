import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

const Authcontext = createContext();

const Authprovider = ({children}) => {

    const [user, setUser] = useState();

    // providers
    const google = new GoogleAuthProvider();
    
    const createUserWithEmail = (email, pass) => { 
        return createUserWithEmailAndPassword(auth, email, pass)
     }
    
    const socialLogin = () => { 
        return signInWithPopup(auth)
     }

    const loginWithEmail = (email, pass) => { 
        return signInWithEmailAndPassword(auth, email, pass)
     }

    const logOut = () => { 
        return signOut(auth)
     }

    useEffect(() => { 
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => { 
            setUser(currentUser);
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
        
    }
    return <Authcontext.Provider value={authInfo} >{children}</Authcontext.Provider>;
};

export default Authprovider;