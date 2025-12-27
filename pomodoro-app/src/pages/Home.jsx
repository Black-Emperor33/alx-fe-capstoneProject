import { useState, useEffect } from "react";
import Header from "../components/Header";
import Timer from "../components/Timer";
import QuoteBox from "../components/QuoteBox";

const MODES = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

function Home() {
  // Task state
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  // Timer state
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(MODES.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [focusCount, setFocusCount] = useState(0);

  // Timer effect
  useEffect(() => {
    if (!isRunning || currentTaskIndex === null) return;

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
  }, [isRunning, mode, currentTaskIndex]);

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

  const switchMode = (newMode) => {
    setMode(newMode);
    setTimeLeft(MODES[newMode]);
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

  // Task functions
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startTask = (index) => {
    setCurrentTaskIndex(index);
    setMode("focus");
    setTimeLeft(MODES.focus);
    setIsRunning(true);
  };

  return (
    <>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to your Pomodoro Session
        </h2>

      <QuoteBox />

        {/* Add Task */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border p-2 flex-1 rounded"
              placeholder="Enter a task"
            />
            <button
              onClick={addTask}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>

          {/* Task List */}
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 border-b ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                <span>{task.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleTask(index)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    {task.completed ? "Undo" : "Done"}
                  </button>
                  <button
                    onClick={() => startTask(index)}
                    className="px-2 py-1 bg-green-600 text-white rounded"
                  >
                    Start
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Task */}
        <p className="mb-2 font-semibold">
          {currentTaskIndex !== null
            ? `Working on: ${tasks[currentTaskIndex].text}`
            : "No task selected"}
        </p>

        <Timer
         mode={mode}
         timeLeft={timeLeft}
         onStart={() => currentTaskIndex !== null && setIsRunning(true)}
         onPause={() => setIsRunning(false)}
         onReset={resetTimer}
         formatTime={formatTime}
/>
      </main>
    </>
  );
}

export default Home;