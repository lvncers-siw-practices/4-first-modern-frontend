import "../App.css";

type ResultCardProps = {
  yourHand: string;
  computerHand: string;
  result: string;
};

export default function ResultCard({
  yourHand,
  computerHand,
  result,
}: ResultCardProps) {
  return result === null ? (
    <div className="result-card">まだ勝負していません</div>
  ) : (
    <div className="result-card">
      <p>あなた：{yourHand}</p>
      <p>コンピュータ：{computerHand}</p>
      <p>結果：{result}</p>
    </div>
  );
}
