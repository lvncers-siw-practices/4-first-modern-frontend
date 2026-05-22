import Header from "./components/Header";
import BugReportCard from "./components/BugReportCard";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <BugReportCard
          title="空中浮遊バグ"
          location="始まりの村"
          danger="高"
          symptom="NPCが全員少しずつ浮き上がり、会話するためにジャンプが必要になります。"
        />
        <BugReportCard
          title="無限ロードバグ"
          location="王都への門"
          danger="中"
          symptom="ロード画面の豆知識だけが永遠に増え続け、ゲーム本編に戻れません。"
        />
        <BugReportCard
          title="ラスボス早退バグ"
          location="最終ダンジョン"
          danger="低"
          symptom="ラスボスが定時で帰宅するため、18時以降に挑戦すると戦闘が始まりません。"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
