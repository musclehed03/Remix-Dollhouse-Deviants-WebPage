import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const stripQuotes = (str: string | undefined) => {
  if (!str) return str;
  return str.replace(/^["']|["']$/g, '');
};

const firebaseConfig = {
  apiKey: stripQuotes(import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: stripQuotes(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || import.meta.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId: stripQuotes(import.meta.env.VITE_FIREBASE_PROJECT_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: stripQuotes(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || import.meta.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: stripQuotes(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: stripQuotes(import.meta.env.VITE_FIREBASE_APP_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_APP_ID),
};

console.log("Firebase API Key loaded:", firebaseConfig.apiKey ? "Yes (starts with " + firebaseConfig.apiKey.substring(0, 5) + ")" : "No");

const isFirebaseConfigured = Boolean(firebaseConfig.apiKey);

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

if (isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
  }
} else {
  console.warn("Firebase is not configured. Please set NEXT_PUBLIC_FIREBASE_API_KEY and other environment variables.");
}

export { app, auth, db, isFirebaseConfigured };
