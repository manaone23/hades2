import BarRechart from "./recharts";

const App = () => {
  return (
    <main className="w-full max-w-[1500px] mx-auto p-4 py-8 text-[12px] font-[Geist-Regular]">
      <div className="text-[18px] text-white text-center">hades 2: warsong patch</div>
      <div className="h-[800px]">
        <BarRechart />
      </div>
    </main>
  );
};

export default App;
