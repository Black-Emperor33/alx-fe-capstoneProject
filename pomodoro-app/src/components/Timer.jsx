function Timer({
  mode,
  timeLeft,
  onStart,
  onPause,
  onReset,
  formatTime,
}) {
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

export default Timer;