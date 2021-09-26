import { firebaseData } from '../dataBase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

import { useState } from 'react';
const auth = firebaseData.auth();
const firestore = firebaseData.firestore();

export default function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoUrl } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebaseData.firestore.FieldValue.serverTimestamp(),
      uid,
      photoUrl,
    });
    setFormValue('');
  };
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
