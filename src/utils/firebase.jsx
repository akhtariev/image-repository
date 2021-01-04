import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyDeH3ekDksSvcWRDKllmYwfPZSlftvqoWE',
  authDomain: 'image-repository-c1030.firebaseapp.com',
  projectId: 'image-repository-c1030',
  storageBucket: 'image-repository-c1030.appspot.com',
  messagingSenderId: '1044092841882',
  appId: '1:1044092841882:web:b2a012192b51f4146c9423',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authObj = firebase.auth;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
if (process.env.NODE_ENV === 'development') {
  console.log('here');
  functions.useEmulator('localhost', 5001);
}
