import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // user Create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login 
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

      // logout 
      const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    // user manage
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail}

            setUser(currentUser)
            setLoading(false)
            // console.log('current users', createUser);

            // if user is exit then issue a token
            if (createUser) {
                
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res =>{
                        console.log("token response",res.data);

                    })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser, 
                {withCredentials:true}
                )
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe()

        }
    }, [])


  



    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;