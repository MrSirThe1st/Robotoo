"use client";
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { db } from "./firebase";
import { useState } from "react";

const FirebaseAuth = () => {
  const { getToken } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInWithClerk = async () => {
    console.log("Sign in with Clerk");
    const token = await getToken({ template: "integration_firebase" });
    const auth = getAuth();
    const userCredentials = await signInWithCustomToken(auth, token || "");
    console.log("User:", userCredentials.user);
    setIsSignedIn(true);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      <button onClick={signInWithClerk}>Sign in</button>
      {isSignedIn && <div>Signed in to Firebase</div>}
    </main>
  );
};

export default FirebaseAuth;
