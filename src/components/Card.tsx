import type { ReactElement } from "react";


interface CardProps{
   headText:String,
   descText:String,
   icon:ReactElement
}

const Card = ({icon,headText,descText}:CardProps) => {
  return (
    <div className="bg-[#1f1f1f] border border-white shadow-lg rounded-md   w-[32%] p-6 flex flex-col items-center text-center">
      {/* Logo Placeholder */}
      <div className="mb-4">
       {icon}
      </div>

      <h3 className="text-[#dcdcdc] text-xl font-semibold mb-1">
       {headText}
      </h3>

      {/* Subheading */}
      <p className="text-slate-400 text-sm">
        {descText}
      </p>
    </div>
  )
}

export default Card