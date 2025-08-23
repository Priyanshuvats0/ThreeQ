
import { motion } from "framer-motion";

type streakDate = {
  [date: string]: boolean;
};

interface FiftyDayGridProps {
  streakDate:streakDate,
  startDate: string; // YYYY-MM-DD
}

function getColor(date: string, solved: boolean, today: Date) {
  const d = new Date(date);

  if (d > today) return "#f1f5f9"; 
  return solved ? "#30a14e" : "gray"; 
}

export default function FiftyDayGrid({
  streakDate,
  startDate,
}: FiftyDayGridProps) {
  const start = new Date(startDate);
  const today = new Date();
  
  const totalDays = 50; 

  const days: { date: string; solved: boolean }[] = [];

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const key = date.toISOString().split("T")[0];
    days.push({ date: key, solved: streakDate[key] || false });
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-500 mb-6">
        50-Day Coding Challenge
      </h2>
      <div className="grid grid-cols-10 gap-2">
        {days.map((day, index) => (
          <motion.div
            key={index}
            className="w-10 h-10 rounded-lg cursor-pointer"
            style={{
              backgroundColor: getColor(day.date, day.solved, today),
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
              transition: { duration: 0.15 },
            }}
            title={`${day.date}: ${
              new Date(day.date) > today
                ? "Upcoming 📅"
                : day.solved
                ? "Solved ✅"
                : "Missed ❌"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
