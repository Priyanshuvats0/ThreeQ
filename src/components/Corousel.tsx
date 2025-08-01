

interface CorouselProps{
    title:String,
    diff:"Easy"|"Medium"|"Hard",
}

const diffcss={
   "Easy":"text-green-400",
   "Hard":"text-red-400",
   "Medium":"text-yellow-400"
}

const Corousel = ({title,diff}:CorouselProps) => {
  return (
     <div className="corousels flex border-b-2 border-slate-400  p-4 hover:bg-[#1F355B]  text-gray-300 cursor-pointer">
                    <div className="w-[70%] text-xl font-semibold pl-4">{title}y</div>
                    <div className={`${diffcss[diff]}  w-[20%] text-xl `}>{diff}</div>
                    <input type="checkbox" className="scale-150"/>
                </div>
  )
}

export default Corousel