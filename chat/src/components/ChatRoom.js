// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import ChatMessage from './ChatMessage';
// const firestore = firebase.firestore();

// export default function ChatRoom() {
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);
//   const [messages] = useCollectionData(query, { idField: 'id' });
//   return (
//     <>
//       <div>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       </div>
//     </>
//   );
// }
