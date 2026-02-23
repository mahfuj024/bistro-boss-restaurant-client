import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init"
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // ✅ Register new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ✅ Login user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ✅ Login with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // ✅ Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // ✅ update user profile
    const updateUserProfile = profileInfo => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    // ✅ Track Current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                try {
                    const userInfo = { email: currentUser.email };
                    const res = await axiosPublic.post("/jwt", userInfo);

                    if (res.data?.token) {
                        localStorage.setItem("access-token", res.data.token);
                    } else {
                        localStorage.removeItem("access-token");
                    }
                } catch (error) {
                    console.error("JWT fetch failed:", error);
                    localStorage.removeItem("access-token");
                }
            } else {
                localStorage.removeItem("access-token");
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        logOut,
        updateUserProfile,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider