import { firebaseData } from '../dataBase';
const auth = firebaseData.auth();

export default function ChatMessage(props) {
  const { text, uid, photoUrl } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}
