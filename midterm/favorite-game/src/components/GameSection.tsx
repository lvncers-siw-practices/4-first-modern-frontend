import { useState } from "react";
import GameCard from "./GameCard";

type Platform = "DS" | "3DS" | "PC" | "PS4" | "Smartphone";

type FilterPlatform = "all" | Platform;

type SortKey = "release" | "play";

type GameEntry = {
  title: string;
  platform: Platform;
  url: string;
  releaseDate: string;
  playDate: string;
};

const FAVORITE_GAMES: GameEntry[] = [
  {
    title: "Newスーパーマリオブラザーズ",
    platform: "DS",
    url: "https://www.nintendo.co.jp/ds/avcj/index.html",
    releaseDate: "2006-05-25",
    playDate: "2007",
  },
  {
    title: "妖怪ウォッチ",
    platform: "3DS",
    url: "https://www.youkaiwatch.jp/",
    releaseDate: "2013-07-11",
    playDate: "2014",
  },
  {
    title: "モンスターハンター 4",
    platform: "3DS",
    url: "https://www.capcom.co.jp/monsterhunter/4/",
    releaseDate: "2013-09-14",
    playDate: "2014",
  },
  {
    title: "MINECRAFT",
    platform: "Smartphone",
    url: "https://www.minecraft.net/ja-jp",
    releaseDate: "2011-11-18",
    playDate: "2016",
  },
  {
    title: "DARK SOULS 3",
    platform: "PS4",
    url: "https://www.darksouls.jp/",
    releaseDate: "2016-03-24",
    playDate: "2016",
  },
  {
    title: "PUBG",
    platform: "PC",
    url: "https://pubg.com/ja",
    releaseDate: "2017-12-21",
    playDate: "2018",
  },
  {
    title: "Escape from Tarkov",
    platform: "PC",
    url: "https://www.escapefromtarkov.com/",
    releaseDate: "2017-07-27",
    playDate: "2020",
  },
  {
    title: "Azur Lane",
    platform: "Smartphone",
    url: "https://azurlane.jp/",
    releaseDate: "2017-09-30",
    playDate: "2018",
  },
];

function compareGames(a: GameEntry, b: GameEntry, sortKey: SortKey) {
  if (sortKey === "release") {
    const releaseCompare = a.releaseDate.localeCompare(b.releaseDate);

    if (releaseCompare !== 0) {
      return releaseCompare;
    }

    return a.playDate.localeCompare(b.playDate);
  }

  const playCompare = a.playDate.localeCompare(b.playDate);

  if (playCompare !== 0) {
    return playCompare;
  }

  return a.releaseDate.localeCompare(b.releaseDate);
}

export default function GameSection() {
  const [filter, setFilter] = useState<FilterPlatform>("all");
  const [sortKey, setSortKey] = useState<SortKey>("play");

  const filteredGames =
    filter === "all"
      ? FAVORITE_GAMES
      : FAVORITE_GAMES.filter((game) => game.platform === filter);

  const sortedGames = [...filteredGames].sort((a, b) =>
    compareGames(a, b, sortKey),
  );

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
        </div>

        <div className="controls-sort">
          <button
            className={sortKey === "play" ? "active" : ""}
            onClick={() => setSortKey("play")}
          >
            プレイ年順
          </button>
        </div>
        <button
          className={sortKey === "release" ? "active" : ""}
          onClick={() => setSortKey("release")}
        >
          発売日順
        </button>
      </div>

      {sortedGames.length > 0 ? (
        <div className="game-grid">
          {sortedGames.map((game) => (
            <GameCard
              key={`${game.title}-${game.platform}`}
              title={game.title}
              platform={game.platform}
              url={game.url}
              releaseDate={game.releaseDate}
              playDate={game.playDate}
            />
          ))}
        </div>
      ) : (
        <p className="empty-message">条件に合うゲームはありません。</p>
      )}
    </section>
  );
}
