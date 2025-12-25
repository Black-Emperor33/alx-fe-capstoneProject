import { useEffect, useState } from "react";

const MODES = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};


function Timer() {
  const [mode, setMode] = useState("focus");
const [timeLeft, setTimeLeft] = useState(MODES.focus);
const [isRunning, setIsRunning] = useState(false);
const [focusCount, setFocusCount] = useState(0);


  useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev === 0) {
        clearInterval(interval);
        handleSessionEnd();
        return prev;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning]);

const handleSessionEnd = () => {
  setIsRunning(false);

  if (mode === "focus") {
    const newCount = focusCount + 1;
    setFocusCount(newCount);

    if (newCount % 4 === 0) {
      switchMode("longBreak");
    } else {
      switchMode("shortBreak");
    }
  } else {
    switchMode("focus");
  }
};

  const resetTimer = () => {
  setIsRunning(false);
  setTimeLeft(MODES[mode]);
};

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const switchMode = (newMode) => {
  setMode(newMode);
  setTimeLeft(MODES[newMode]);
};

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Pomodoro Timer</h2>
<p className="uppercase tracking-wide text-gray-500">
  {mode === "focus" && "Focus Time"}
  {mode === "shortBreak" && "Short Break"}
  {mode === "longBreak" && "Long Break"}
</p>

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

export default Timer(MODES, timeLeft, isRunning, focusCount, setMode, setTimeLeft, setIsRunning, setFocusCount);
