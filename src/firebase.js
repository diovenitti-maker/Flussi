import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuoRfSEmvaES8OfTGZHPlhDxkQ40UZAxI",
  authDomain: "flussi-f4ffc.firebaseapp.com",
  projectId: "flussi-f4ffc",
  storageBucket: "flussi-f4ffc.firebasestorage.app",
  messagingSenderId: "303982687450",
  appId: "1:303982687450:web:def8badde2e0214a85a1e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const COL = "data";

export async function fbGet(key) {
  try {
    const ref = doc(db, COL, key);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data().value : null;
  } catch (e) {
    console.error("fbGet error", e);
    return null;
  }
}

export async function fbSet(key, value) {
  try {
    const ref = doc(db, COL, key);
    await setDoc(ref, { value });
  } catch (e) {
    console.error("fbSet error", e);
  }
}
