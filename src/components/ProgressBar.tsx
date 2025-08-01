import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
        const percentage=50
  return (
     <div className="left w-[20%] pr-8 flex justify-center  items-center ">
             <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={buildStyles({
      textColor: "#E5E7EB",       // Tailwind: gray-200
      pathColor: "#6366F1",       // Tailwind: indigo-500
      trailColor: "#374151",      // Tailwind: slate-700
      textSize: "18px",
      pathTransitionDuration: 0.5,
    })}
    className='h-40'
  />
            </div>
  )
}

export default ProgressBar