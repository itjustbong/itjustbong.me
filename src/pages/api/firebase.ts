import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: "itjustbong.firebaseapp.com",
  projectId: "itjustbong",
  storageBucket: "itjustbong.appspot.com",
  messagingSenderId: "1083957660038",
  appId: "1:1083957660038:web:d9c57714090227c9dc8407",
  measurementId: "G-Z03X286K7K",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
