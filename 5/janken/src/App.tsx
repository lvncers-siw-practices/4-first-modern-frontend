import { useState } from "react";
import "./App.css";
import HandButton from "./components/HandButton";
import ResultCard from "./components/ResultCard";

function App() {
  const [yourHand, setYourHand] = useState<string>("");
  const [computerHand, setComputerHand] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  return (
    <main className="card">
      <h1>じゃんけんアプリ</h1>
      <p className="lead">
        自分の手を選ぶと、コンピューターの手と勝敗が表示されます。
      </p>

      <div>
        <HandButton type="グー" onClick={() => setYourHand("グー")} />
        <HandButton type="チョキ" onClick={() => setYourHand("チョキ")} />
        <HandButton type="パー" onClick={() => setYourHand("パー")} />
      </div>

      <ResultCard
        yourHand={yourHand}
        computerHand={computerHand}
        result={result}
      />
    </main>
  );
}

export default App;
