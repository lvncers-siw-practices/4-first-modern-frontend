import { useState } from "react";
import GameCard from "./GameCard";

type Platform = "DS" | "3DS" | "PS4" | "PC" | "Smartphone";

type FilterPlatform = "all" | Platform;

type SortKey = "release" | "play";

type GameEntry = {
  title: string;
  platform: Platform;
  url: string;
  releaseDate: string;
  playDate: string;
  description: string;
};

const FAVORITE_GAMES: GameEntry[] = [
  {
    title: "Newスーパーマリオブラザーズ",
    platform: "DS",
    url: "https://www.nintendo.co.jp/ds/a2dj/index.html",
    releaseDate: "2006-05-25",
    playDate: "2007",
    description: "初めて遊んだゲーム。",
  },
  {
    title: "妖怪ウォッチ",
    platform: "3DS",
    url: "https://www.youkai-watch.jp/yw/",
    releaseDate: "2013-07-11",
    playDate: "2014",
    description: "初めてのRPG。",
  },
  {
    title: "モンスターハンター4",
    platform: "3DS",
    url: "https://www.capcom-games.com/product/ja-jp/monsterhunter4/",
    releaseDate: "2013-09-14",
    playDate: "2014",
    description: "友達と一緒に遊んだアクションゲーム。",
  },
  {
    title: "MINECRAFT",
    platform: "Smartphone",
    url: "https://www.minecraft.net/ja-jp",
    releaseDate: "2011-11-18",
    playDate: "2016",
    description: "世界を自由に作ることにハマった。",
  },
  {
    title: "DARK SOULS 3",
    platform: "PS4",
    url: "https://www.darksouls.jp/",
    releaseDate: "2016-03-24",
    playDate: "2016",
    description: "初めての4にゲー。",
  },
  {
    title: "PUBG",
    platform: "PC",
    url: "https://pubg.com/ja",
    releaseDate: "2017-12-21",
    playDate: "2018",
    description: "初めて本格的なバトロワをプレイしたFPS。",
  },
  {
    title: "Escape from Tarkov",
    platform: "PC",
    url: "https://www.escapefromtarkov.com/",
    releaseDate: "2017-07-27",
    playDate: "2021",
    description: "ハードコアなエクストラクションシューターにハマった。",
  },
  {
    title: "Azur Lane",
    platform: "Smartphone",
    url: "https://azurlane.jp/",
    releaseDate: "2017-09-30",
    playDate: "2018",
    description: "美少女スマホゲームにハマった。",
  },
];

const GAMES_BY_PLAY = [...FAVORITE_GAMES].sort((a, b) =>
  a.playDate.localeCompare(b.playDate),
);

const GAMES_BY_RELEASE = [...FAVORITE_GAMES].sort((a, b) =>
  a.releaseDate.localeCompare(b.releaseDate),
);

export default function GameSection() {
  const [filter, setFilter] = useState<FilterPlatform>("all");
  const [sortKey, setSortKey] = useState<SortKey>("play");

  const games = sortKey === "play" ? GAMES_BY_PLAY : GAMES_BY_RELEASE;

  const displayedGames =
    filter === "all" ? games : games.filter((game) => game.platform === filter);

  return (
    <section className="info-card">
      <p className="section-label">Games</p>
      <h2>人生を変えたゲーム</h2>
      <p className="game-card-lead">人生を変えたゲームを並べています。</p>

      <div className="controls">
        <div className="controls-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            すべて
          </button>
          <button
            className={filter === "DS" ? "active" : ""}
            onClick={() => setFilter("DS")}
          >
            DS
          </button>
          <button
            className={filter === "3DS" ? "active" : ""}
            onClick={() => setFilter("3DS")}
          >
            3DS
          </button>
          <button
            className={filter === "Smartphone" ? "active" : ""}
            onClick={() => setFilter("Smartphone")}
          >
            Smartphone
          </button>
          <button
            className={filter === "PS4" ? "active" : ""}
            onClick={() => setFilter("PS4")}
          >
            PS4
          </button>
          <button
            className={filter === "PC" ? "active" : ""}
            onClick={() => setFilter("PC")}
          >
            PC
          </button>
        </div>

        <div className="controls-sort">
          <button
            className={sortKey === "play" ? "active" : ""}
            onClick={() => setSortKey("play")}
          >
            プレイ年順
          </button>
          <button
            className={sortKey === "release" ? "active" : ""}
            onClick={() => setSortKey("release")}
          >
            発売日順
          </button>
        </div>
      </div>

      {displayedGames.length > 0 ? (
        <div className="game-grid">
          {displayedGames.map((game) => (
            <GameCard
              key={`${game.title}-${game.platform}`}
              title={game.title}
              platform={game.platform}
              url={game.url}
              releaseDate={game.releaseDate}
              playDate={game.playDate}
              description={game.description}
            />
          ))}
        </div>
      ) : (
        <p className="empty-message">条件に合うゲームはありません。</p>
      )}
    </section>
  );
}
