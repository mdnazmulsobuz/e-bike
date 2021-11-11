import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";


// initialize firebase app
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = {email, displayName: name};
          setUser(newUser);
          // send name on firebase
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
          .finally( ()=> setIsloading(false));
    }
    
    const loginUser = (email, password, location, history) =>{
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from  || '/';
          history.replace(destination);
          setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally( ()=> setIsloading(false));
        ;
    }


    // user  observer
    useEffect( ()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if (user) {
            setUser(user)
          } else {
            setUser({})
          }setIsloading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const logOut = () =>{
        signOut(auth).then(() => {

          }).catch((error) => {

          })
          .finally( ()=> setIsloading(false));
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