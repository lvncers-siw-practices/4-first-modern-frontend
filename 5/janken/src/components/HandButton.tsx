import "../App.css";

export default function HandButton({
  type,
  onClick,
}: {
  type: string;
  onClick: () => void;
}) {
  function getComputerHand() {
    const hands = ["グー", "チョキ", "パー"];
    return hands[Math.floor(Math.random() * hands.length)];
  }

  function getResult(yourHand: string, computerHand: string) {
    if (yourHand === computerHand) {
      return "引き分け";
    }
    return "勝ち";
  }
  return (
    <button className="hand-button" onClick={onClick}>
      {type}
    </button>
  );
}
