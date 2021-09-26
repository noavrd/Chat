import './App.css';
import { firebaseData } from './dataBase';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

const auth = firebaseData.auth();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        {user && (
          <>
            <i className="fa fa-user-circle-o"></i>
            <span className="display-name"> {user.displayName}</span>
            <br />
            <SignOut />
          </>
        )}
      </header>
      <section>
        {user ? (
          <div className="user">
            <ChatRoom />
          </div>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default App;
