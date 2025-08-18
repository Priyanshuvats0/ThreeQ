import { FcGoogle } from "react-icons/fc";
import { app } from "../config/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

   
    const SignInGoogle=()=>{
      const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential?.accessToken;
       // The signed-in user info.
       const user = result.user;
       // IdP data available using getAdditionalUserInfo(result)
       // ...
     }).catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
       // ...
     });
   
    }

    const SignUpWithEmail=()=>{
      //to be done
    }
   

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
         <div className="border-2 border-slate-200 p-8 rounded-md bg-gray-950">
            <div className="text-xl font-bold mb-8 text-center">SignUP</div>
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="border-2  rounded-md   p-2"  onChange={(e)=>setName(e.target.value)} />
               <input type="email" placeholder="Email" className="border-2  rounded-md  p-2"   onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="border-2  rounded-md  p-2"  onChange={(e)=>setPassword(e.target.value)} />
                <div className="flex justify-between mt-3 gap-2">
                      <button className="border-2 rounded-md pr-4 pl-4 p-2  cursor-pointer bg-gray-100 text-black font-bold w-36" onClick={SignUpWithEmail}>SignUp</button>
                      <button className="cursor-pointer border-2 rounded-md pr-4 pl-4 flex  justify-center items-center" onClick={SignInGoogle}><FcGoogle/>oogle</button>
                </div>
                 <span className="text-sm text-gray-500 ">Already have an account?</span>
            </div>
         </div>
    </div>
  )
}

export default SignUp