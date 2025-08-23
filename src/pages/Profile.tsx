import { useEffect, useState } from "react";
import ActivityGrid from "../components/ActivityGrid"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import dayjs from "dayjs";


const Profile = () => {
  const [streakDate,setStreakDate]=useState([]);
  const [startDate,setStartDate]=useState("2029-08-15");

  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log("not signed in");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        setStreakDate(docSnap.data().streakDate);
        setStartDate(dayjs(docSnap.data().createdAt.toDate()).format("YYYY-MM-DD"));
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, []);
 console.log(startDate)
  return (
    <div className="min-h-screen bg-black p-8">
       <div className="">
             <div className="h-[40vh] w-full p-8 flex gap-9 justify-center ">
                <div className="h-30 w-30 rounded-full bg-amber-700">
                     
                </div>
                <div className="flex-col">
                <h1 className="text-white text-4xl">PRIYANSHU VATS</h1>
                <span className="text-gray-500 text-xl">priyanshu0</span>
                </div>
             </div>
            <ActivityGrid startDate={startDate} streakDate={streakDate} />
       </div>
    </div>
  )
}

export default Profile