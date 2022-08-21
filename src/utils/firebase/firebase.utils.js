/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  setIndexConfiguration,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOvJb9qBXqPjmby2pF1qFfOsRVjUkml34',
  authDomain: 'clothing-db-9844e.firebaseapp.com',
  projectId: 'clothing-db-9844e',
  storageBucket: 'clothing-db-9844e.appspot.com',
  messagingSenderId: '320326711393',
  appId: '1:320326711393:web:5f967df577d3e3a9311220',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
