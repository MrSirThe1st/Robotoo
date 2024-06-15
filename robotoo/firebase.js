import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useAuth } from "@clerk/nextjs";

const firebaseConfig = {
  apiKey: "AIzaSyBRtMAazrGE2oEIqzWtq7O3aRh68_t9brs",
  authDomain: "popup-2438e.firebaseapp.com",
  projectId: "popup-2438e",
  storageBucket: "popup-2438e.appspot.com",
  messagingSenderId: "575025046019",
  appId: "1:575025046019:web:cc53b7ec32f67979922436",
  measurementId: "G-W5WJ7NN127",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export default function FirebaseUI() {
  const { getToken } = useAuth();
  const signInWithClerk = async () => {
    console.log("Sign in with clerk");
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token || "");
    // The userCredentials.user object can call the methods of
    // the Firebase platform as an authenticated user.
    console.log("User:", userCredentials.user);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      <button onClick={signInWithClerk}>Sign in</button>
      <button onClick={getFirestoreData}>Get document</button>
    </main>
  );
}

export { app, db, auth };
