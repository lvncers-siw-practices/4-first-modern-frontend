import ReviewCard from "./components/ReviewCard";
import "./style.css";

function App() {
  return (
    <div className="app">
      <main className="container">
        <h1>架空ゲームレビュー</h1>
        <ReviewCard
          title="LEGEND OF BUGS"
          genre="未完成ファンタジーRPG"
          rating="2 / 10"
          recommendation="★☆☆☆☆"
          message="バグなのか仕様なのか判断に迷う場面が多く、プレイヤーの忍耐力を試される作品です。"
        />
        <ReviewCard
          title="エターナル・メンテナンス"
          genre="ログイン待機シミュレーション"
          rating="1 / 10"
          recommendation="★☆☆☆☆"
          message="ゲームを遊ぶ時間より、メンテナンス告知を読む時間の方が長いです。公式サイトの更新頻度だけは高評価です。"
        />
        <ReviewCard
          title="課金勇者と未完成のダンジョン"
          genre="DLC購入型アクションRPG"
          rating="3 / 10"
          recommendation="★★☆☆☆"
          message="本編だけでは最初の村から出ることも難しく、 DLCを買うことでようやく普通のゲームに近づきます。"
        />
      </main>
    </div>
  );
}

export default App;
