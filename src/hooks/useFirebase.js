import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";


// initialize firebase app
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');  
            const newUser = {email, displayName: name };
            setUser(newUser);
            // send me to after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');     
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
    }
    
    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from ||  '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
        ;
    }


    // user  observer
    useEffect( ()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if (user) {
            setUser(user)
          } else {
            setUser({})
          }
          setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const logOut = () =>{
        signOut(auth).then(() => {

          }).catch((error) => {

          })
          .finally(() => setIsLoading(false));
    }

    return{
        user, 
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser
    }
}

export default useFirebase;