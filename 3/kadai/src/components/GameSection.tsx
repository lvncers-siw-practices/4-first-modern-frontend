import GameCard from "./GameCard.tsx";

export type GameEntry = {
  title: string;
  platform: string;
};

export const FAVORITE_GAMES: GameEntry[] = [
  { title: "DARK SOULS 1", platform: "PC" },
  { title: "DARK SOULS 2", platform: "PC" },
  { title: "ELDEN RING", platform: "PC" },
  { title: "マインクラフト", platform: "PC" },
  { title: "モンハンワールド", platform: "PC" },
  { title: "PUBG", platform: "PC" },
  { title: "Escape from Tarkov", platform: "PC" },
];

export default function GameSection() {
  return (
    <section className="info-card">
      <p className="section-label">Games</p>
      <h2>好きなゲーム</h2>
      <p className="game-card-lead">
        最近ハマっている・よく遊ぶタイトルを並べています。
      </p>
      <div className="game-grid">
        {FAVORITE_GAMES.map((game) => (
          <GameCard
            key={`${game.title}-${game.platform}`}
            title={game.title}
            platform={game.platform}
          />
        ))}
      </div>
    </section>
  );
}
