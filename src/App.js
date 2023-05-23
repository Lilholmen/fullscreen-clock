import Header from "./Header/Header";
import Time from "./Time/Time";

function App() {
  return (
    <div className="bg-slate-300 h-screen w-full">
      <Header />
      <div className="flex items-center justify-center">
        <Time />
      </div>
    </div>
  );
}

export default App;
