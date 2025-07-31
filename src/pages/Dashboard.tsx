

import Button from '@mui/material/Button';


export const Dashboard = () => {
  return (
<div className='flex justify-center items-center pt-12'>
  <div className='w-6xl h-96  b flex justify-center '>
    <div className='w-full'>
      <div className='w-full flex items-center justify-center'>
      <span className=' border-gray-400  border h-6 pr-2 pl-2 rounded-3xl text-white '>Daily DSA Practise</span></div>  
      
        <h1 className='h-16 text-center mt-7  text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent'>ThreeQ Daily Challenge</h1>
        <div className='flex items-center justify-center'>
        <p className=' w-[50%]  text-xl text-center text-slate-400 mt-4'>Build your Data Structures & Algorithms skills with a consistent daily practice of solving 3 LeetCode questions</p></div>
          <div className=' flex justify-center gap-6 mt-4'>
        <Button variant="contained" className='text-black'>Start Today's Challenge</Button>
       
          <Button variant="outlined">Progress</Button>
      </div>
      </div>
    
  </div>
</div>
  )
}
