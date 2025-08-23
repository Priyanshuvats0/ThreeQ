

interface ButtonProps{
   variant:"primary"|"secondary",
   text:String,
   onClick?: () => void;
}

const variantClass={
   "primary":` bg-gray-300 text-black  hover:bg-gray-500 hover:text-white `,
   "secondary": "text-white border border-white hover:text-gray-400 hover:border-gray-400 "
}

const Button2 = ({text,variant,onClick}:ButtonProps) => {
  return (
    <div className={variantClass[variant]+'p-2 font-semibold flex justify-center items-center pl-4 pr-4 rounded-sm  cursor-pointer '}  onClick={onClick}>{text}</div>

  )
}

export default Button2