import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <main
      className={`
      w-full
      h-full min-h-dvh
      flex lg:items-center justify-center
    `}
    >
      <Calculator />
    </main>
  );
}

export default App;
