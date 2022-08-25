/** @type {import('./$types').PageLoad} */

import { initializeApp, getApps, getApp } from "firebase/app";
import { collection, getFirestore, onSnapshot, doc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "$lib/config/firebase";
import { browser } from "$app/env";

export async function load() {

  initializeApp(firebaseConfig);
  const db = getFirestore();
  console.log(db);

  const docRef = doc(db, "articles", "3H1MMEre72S26h9QNgw1");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists) {
    const article = docSnap.data();
    console.log(article);
  }

  return {
    data: {
      title: "test"
    }
  };
}