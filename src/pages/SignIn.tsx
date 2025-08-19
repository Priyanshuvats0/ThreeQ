import { FcGoogle } from "react-icons/fc";
import { app } from "../config/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  setDoc, getFirestore, doc, getDoc } from "firebase/firestore";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, SetIsSignIn] = useState(true);
  const navigate = useNavigate();

  const SignInGoogle = async () => {
 const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db=getFirestore(app);

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        userName: user.displayName || "Anonymous",
        email: user.email,
        profilePic: user.photoURL || "",
        createdAt: new Date(),
      });
    }

    navigate("/");
  } catch (error: any) {
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
  }
  };

  const SignUpWithEmail = async () => {
    console.log("singnup");
    //to be done
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      await setDoc(doc(db, "users", user.uid), {
        uid:user.uid,
        userName: name,
        email:user.email,
        createdAt: new Date(),
      });
      console.log("User signed up & saved:", user.uid);
      navigate("/");
    } catch (err: any) {
      console.error("Error Code:", err.code);
      console.error("Error Message:", err.message);
    }
  };

  const SignInWithEmail = async () => {
    console.log("singnin");
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      navigate("/");
    } catch (err: any) {
      console.error("Error Code:", err.code);
      console.error("Error Message:", err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="border-2 border-slate-200 p-8 rounded-md bg-gray-950">
        <div className="text-xl font-bold mb-8 text-center">
          {isSignIn ? "SignIn" : "SignUp"}
        </div>
        <div className="flex flex-col gap-4">
          {!isSignIn && (
            <input
              type="text"
              placeholder="Username"
              className="border-2  rounded-md   p-2"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border-2  rounded-md  p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2  rounded-md  p-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between mt-3 gap-2">
            <button
              className="border-2 rounded-md pr-4 pl-4 p-2  cursor-pointer bg-gray-100 text-black font-bold w-36"
              onClick={!isSignIn ? SignUpWithEmail : SignInWithEmail}
            >
              {isSignIn ? "SignIn" : "SignUp"}
            </button>
            <button
              className="cursor-pointer border-2 rounded-md pr-4 pl-4 flex  justify-center items-center"
              onClick={SignInGoogle}
            >
              <FcGoogle />
              oogle
            </button>
          </div>
          <span className="text-sm text-gray-500  cursor-pointer" onClick={()=>SetIsSignIn(!isSignIn)}>
            {isSignIn ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
