
import Button2 from '../components/Button';
import Card from '../components/Card';
import { FaCode } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaTrophy } from "react-icons/fa";


export const Dashboard = () => {
  const cardTail:any="text-5xl text-[#3A80F2] bg-[#1F355B] rounded-md p-2"
  return (
<div className=' pt-12'>
  <div className='w-full h-80  b flex justify-center '>
    <div className='w-full '>
      <div className='w-full flex items-center justify-center '>
      <span className=' border-gray-400  border h-6 pr-2 pl-2 rounded-3xl text-white '>Daily DSA Practise</span></div>  
      
        <h1 className='h-16 text-center mt-7  text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent'>ThreeQ Daily Challenge</h1>
        <div className='flex items-center justify-center'>
        <p className=' w-[50%]  text-xl text-center text-slate-400 mt-4'>Build your Data Structures & Algorithms skills with a consistent daily practice of solving 3 LeetCode questions</p></div>
          <div className=' flex justify-center gap-6 mt-8'>
        {/* <Button variant="contained" className='text-black'>Start Today's Challenge</Button>
        */}
          {/* <Button variant="outlined">Progress</Button> */}
          <Button2 text="Start Today's Challenge" variant="primary"></Button2>
          <Button2 text="View Progress" variant='secondary'></Button2>
      </div>
      </div>
      
    
  </div>
<div className=' flex justify-between pr-16 pl-16 w-[100%]'>
   
    <Card headText="Daily Practise"   descText="Solve 3 carefully selected Leetcode problems every day"  icon={<FaCode className={cardTail}/>}/>
     <Card  headText="Skill Building" descText="Strenthen your DSA fundamentals with consistentpractise" icon={<GoGoal className={cardTail} />}/>
      <Card  headText="Track Progress"  descText="Monitor your daily streak and improvement over time"  icon={<FaTrophy className={cardTail} />}/>
      </div>

</div>
  )
}
