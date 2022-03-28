import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBymNPu7jd4Qhonp59iBK6bpeTN_Dt0gAc",
  authDomain: "instagram-reels-8f375.firebaseapp.com",
  projectId: "instagram-reels-8f375",
  storageBucket: "instagram-reels-8f375.appspot.com",
  messagingSenderId: "887115671862",
  appId: "1:887115671862:web:265253a0d14018eaf82b97",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }
