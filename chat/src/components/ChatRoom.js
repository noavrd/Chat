import { firebaseData, create } from '../dataBase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { useRef, useState } from 'react';
const auth = firebaseData.auth();
const firestore = firebaseData.firestore();

export default function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const latest = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue === '') {
      return;
    }
    const newMessage = formValue;
    console.log(formValue);
    console.log(auth.currentUser.photoURL);
    const { uid, photoURL } = auth.currentUser;
    setFormValue('');

    await messagesRef.add({
      text: newMessage,
      createdAt: create,
      uid,
      photoURL,
    });

    latest.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div>
        {console.log(messages.length)}
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={latest}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">📩</button>
      </form>
    </>
  );
}
