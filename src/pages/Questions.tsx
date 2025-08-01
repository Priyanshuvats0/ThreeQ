

import Corousel from '../components/Corousel';
import ProgressBar from '../components/ProgressBar';

const Questions = () => {
  
  return (
    <div className="bg-[#192334]  mr-16 ml-16 mt-16 text-white pb-12 rounded-md ">
        <div className="head flex  justify-center pt-8 ">
            <span className='    text-white text-4xl font-bold tracking-tight '>Today's Goal</span>
        </div>
        <div className="bottom flex pr-8 pl-8 mt-12">
           <ProgressBar/>
            <div className="right w-[80%] border-2 border-b-0 border-slate-400 rounded-md ">
              {/* map it up */}
               <Corousel title="Random number" diff="Easy"/>
                 <Corousel title="Random number" diff="Medium"/>
                <Corousel title="Random number" diff="Hard"/>
            </div>
        </div>
    </div>
  )
}
  
export default Questions