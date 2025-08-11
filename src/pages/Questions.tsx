

import { useEffect, useState } from 'react';
import Corousel from '../components/Corousel';
import ProgressBar from '../components/ProgressBar';

const Questions = () => {
    const jsonURL="https://raw.githubusercontent.com/Priyanshuvats0/questions_mvp/refs/heads/main/Questions.json";
    const [ThreeState,SetThreeState]:any=useState([]);
   useEffect(()=>{
       const fetchData= async ()=>{
           const res= await fetch(jsonURL);
          const data=await res.json();
          const startDate=new Date("2025-08-01")
          const now=new Date();
                                       // @ts-ignore
          let dayIndex=Math.floor((now-startDate)/(1000*60*60*24));
         
   
          dayIndex=dayIndex%50;
          const ThreeQ=[];
          ThreeQ.push(data[dayIndex]);
          ThreeQ.push(data[(dayIndex+50)%150]);
           ThreeQ.push(data[(dayIndex+100)%150]);
          SetThreeState(ThreeQ);
        
       }
   
       fetchData();
     },[]);

  return (
    <div className="bg-[#192334]  mr-16 ml-16 mt-16 text-white pb-12 rounded-md ">
        <div className="head flex  justify-center pt-8 ">
            <span className='    text-white text-4xl font-bold tracking-tight '>Today's Goal</span>
        </div>
        <div className="bottom flex pr-8 pl-8 mt-12">
           <ProgressBar/>
            <div className="right w-[80%] border-2 border-b-0 border-slate-400 rounded-md ">
              {/* map it up */}
              {ThreeState.map((question:any)=>{
                 {console.log(question)}
                    return <Corousel title={question.title} diff={question.difficulty} url={question.url}/>
              })}
               {/* <Corousel title="Random number" diff="Easy"/>
                 <Corousel title="Random number" diff="Medium"/>
                <Corousel title="Random number" diff="Hard"/> */}
            </div>
        </div>
    </div>
  )
}
  
export default Questions