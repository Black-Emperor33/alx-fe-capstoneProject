import { motion } from "framer-motion";

function CircularTimer({ timeLeft, totalTime, onStart, onPause, onReset, mode }) {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / totalTime) * circumference;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <svg width={220} height={220}>
        <circle
          cx={110}
          cy={110}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={10}
          fill="transparent"
        />
        <motion.circle
          cx={110}
          cy={110}
          r={radius}
          stroke="#3bf232"
          strokeWidth={10}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-3xl font-bold"
        >
          {formatTime(timeLeft)}
        </text>
      </svg>

      <div className="space-x-4">
        <button
          onClick={onStart}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={onPause}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CircularTimer;