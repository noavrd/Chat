import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
  apiKey: 'AIzaSyCDsp-mt6LULuorL6-DoYWFD_YP8a4_czE',
  authDomain: 'chat-98e07.firebaseapp.com',
  projectId: 'chat-98e07',
  storageBucket: 'chat-98e07.appspot.com',
  messagingSenderId: '566565647073',
  appId: '1:566565647073:web:16bb16451346abd32dfda0',
  measurementId: 'G-XM6QD30FFK',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default App;
