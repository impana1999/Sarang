import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../../firebase"; // Ensure this is the correct path to your firebase.ts

export const googleLogin = async () => {
  try {
    // Perform Google sign-in
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    return {
      name: user.displayName, // User's name from Google account
      email: user.email, // User's email from Google account
    };
  } catch (error) {
    console.error("Error during Google login", error);
    throw error; // Throw error to handle in your thunk or calling function
  }
};
