

interface ButtonProps{
   variant:"primary"|"secondary",
   text:String,

}

const variantClass={
   "primary":` bg-[#3B82F6] text-black  hover:bg-[#1565C0] `,
   "secondary": "text-white border border-slate-200 hover:text-slate-400 hover:border-slate-400 "
}

const Button2 = ({text,variant}:ButtonProps) => {
  return (
    <div className={variantClass[variant]+'p-2 font-semibold flex justify-center items-center pl-4 pr-4 rounded-sm  cursor-pointer '}>{text}</div>

  )
}

export default Button2