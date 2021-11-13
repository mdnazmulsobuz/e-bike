import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";


// initialize firebase app
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
  
    // user registration function
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');  
            const newUser = {email, displayName: name };
            setUser(newUser);
            // save user to database
            saveUser(email, name);
            // send me to after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/dashboard');     
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
    }
    
    // User login function
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


    // set admin
    useEffect( () =>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=> res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    function logOut() {
    signOut(auth).then(() => {
    }).catch((error) => {
    })
      .finally(() => setIsLoading(false));
  }

  // saved user function
    const saveUser = (email, displayName) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()

    }

    return{
        user, 
        admin,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser
    }
}

export default useFirebase;