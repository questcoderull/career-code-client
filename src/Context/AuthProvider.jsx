import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign in with google

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout
  const logOutUser = () => {
    return signOut(auth);
  };

  // ovserver
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user in the auth state change, ", currentUser);
      setLoading(false);

      // jwt reletd code. in 7th video.
      if (currentUser?.email) {
        axios
          .post(
            "http://localhost:5000/jwt",
            { email: currentUser.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      // jwt related code // in 6th video.
      // if (currentUser?.email) {
      //   const userData = { email: currentUser.email };
      //   // axios
      //   //   .post("http://localhost:5000/jwt", userData)
      //   //   .then((res) => {
      //   //     console.log("token after jwt", res.data);
      //   //     // code if the we get result.

      //   //     //first option. we will not use like this. but this is an option.
      //   //     // const token = res.data.token;
      //   //     // localStorage.setItem("token", token);
      //   //   })
      //   //   .catch((error) => {
      //   //     console.log(error);
      //   //   });

      //   axios
      //     .post("http://localhost:5000/jwt", userData, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loading,
    setLoading,
    signInUser,
    logOutUser,
    signInWithGoogle,
    user,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
