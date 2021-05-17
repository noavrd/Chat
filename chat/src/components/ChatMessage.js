import firebase from '../dataBase';
const auth = firebase.auth();

export default function ChatMessage(props) {
  const { text, uid, photoUrl } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
      <form>
        <input />
        <button type="submit">📩</button>
      </form>
    </>
  );
}
