import Header from "../components/Header";
import Timer from "../components/Timer";
import Controls from "../components/Controls";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4">
      <Header />
      <Timer />
      <Controls />
      <TaskList />
    </main>
  );
}

export default Home;