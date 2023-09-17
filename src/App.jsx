import "./App.css";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)
  function onSignIn() {
    setLoading(true)
    signInWithEmailAndPassword(auth, "hello@gmail.com", "123456")
      .then(() => {
        console.log("sign in")
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onSignOut(){
    signOut(auth).then(() => {
      console.log("sign out")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <button onClick={onSignIn}>Sign In</button>
      <button onClick={onSignOut}>Sign Out</button>
      { loading ?
      <div>
        Loading ....
      </div>
      :
      <div>
        not loading 
      </div>
      }
    </>
  );
}

export default App;
