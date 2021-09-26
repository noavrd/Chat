import { firebaseData } from '../dataBase';
const auth = firebaseData.auth();

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  console.log(props.message);
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </>
  );
}
