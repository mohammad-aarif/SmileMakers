import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react/cjs/react.development";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    // Email and Password Login Function 
    const emailSignUp = (data) => {
        const{displayName, email, password} = data;
        // console.log(displayName, email, password)
        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser({})
        })
        .catch((error) => {
          setError(error.message)
        });
    }

    const emailSignIn = (data) => {
        const{email, password} = data;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
        })
    }

    // Google Login Function 
    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(res => setUser(res.user))
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    // Sign Out function
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
          })
        .catch((error) => {
            setError(error.message)
          })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        emailSignIn,
        emailSignUp,
        googleSignIn,
        error,
        logOut
    }
}

export default useFirebase;