import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseData = firebase.initializeApp({
  apiKey: 'AIzaSyCDsp-mt6LULuorL6-DoYWFD_YP8a4_czE',
  authDomain: 'chat-98e07.firebaseapp.com',
  projectId: 'chat-98e07',
  storageBucket: 'chat-98e07.appspot.com',
  messagingSenderId: '566565647073',
  appId: '1:566565647073:web:16bb16451346abd32dfda0',
  measurementId: 'G-XM6QD30FFK',
});
export const provider = new firebase.auth.GoogleAuthProvider();
