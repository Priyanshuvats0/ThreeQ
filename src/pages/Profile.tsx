import ActivityGrid from "../components/ActivityGrid"


const Profile = () => {
const progressData = {
  "2025-08-15": true,
  "2025-08-16": false,
  "2025-08-17": true,
  "2025-08-18": true,
  "2025-08-19": false,
  "2025-08-20": true,
};


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
            <ActivityGrid startDate="2025-08-15" progressData={progressData} />
       </div>
    </div>
  )
}

export default Profile