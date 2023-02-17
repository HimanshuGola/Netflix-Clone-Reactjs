import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3papE3_6gubmzekLnkpLKl6AK-JX51dc",
  authDomain: "netflix-clone-react-fa483.firebaseapp.com",
  projectId: "netflix-clone-react-fa483",
  storageBucket: "netflix-clone-react-fa483.appspot.com",
  messagingSenderId: "1046960466287",
  appId: "1:1046960466287:web:4aabf9dfe3040dee63609a"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth}
// export default db