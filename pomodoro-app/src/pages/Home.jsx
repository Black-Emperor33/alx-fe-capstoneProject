import Header from "../components/Header";
import Timer from "../components/Timer";
import Controls from "../components/Controls";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to your Pomodoro Session
        </h2>

      </main>
      <div className="min-h-screen flex items-center justify-center">
      <Timer />
    </div>
      <Controls />
      <TaskList />
    </>
  );
}

export default Home;