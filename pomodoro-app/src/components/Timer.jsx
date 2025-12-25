import { useEffect, useState } from "react";

const FOCUS_TIME = 25 * 60; // 25 minutes in seconds

function Timer() {
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(FOCUS_TIME);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Pomodoro Timer</h2>

      <div className="text-5xl font-bold">
        {formatTime(timeLeft)}
      </div>

      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Start
        </button>

        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;