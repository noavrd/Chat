import './App.css';
import firebase from './dataBase';

// import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

const auth = firebase.auth();
// const firestore = firebase.firestore();

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
