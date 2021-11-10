import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut} from "firebase/auth";


// initialize firebase app
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    
    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    // user  observer
    useEffect( ()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if (user) {
            setUser(user)
          } else {
            setUser({})
          }
        });
        return () => unsubscribe;
    }, [])

    const logOut = () =>{
        signOut(auth).then(() => {

          }).catch((error) => {

          });
    }

    return{
        user, 
        registerUser,
        logOut,
        loginUser
    }


}

export default useFirebase;