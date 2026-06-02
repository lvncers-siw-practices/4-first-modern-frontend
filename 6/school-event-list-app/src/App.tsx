import { useState } from "react";
import "./App.css";

type EventStatus = "open" | "few" | "closed";

type FilterStatus = "all" | EventStatus;

type EventItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  place: string;
  capacity: string;
  status: EventStatus;
  description: string;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Reactミニ勉強会",
    category: "プログラミング",
    date: "6月18日 10:00〜12:00",
    place: "第1実習室",
    capacity: "20名",
    status: "open",
    description: "コンポーネント、props、stateを復習しながら、小さなUIを作成します。",
  },
  {
    id: 2,
    title: "ポートフォリオ相談会",
    category: "キャリア",
    date: "6月20日 13:00〜15:00",
    place: "キャリア支援室",
    capacity: "残り3名",
    status: "few",
    description: "就職活動で使うポートフォリオの見せ方や説明の仕方を相談できます。",
  },
  {
    id: 3,
    title: "チーム開発LT会",
    category: "発表",
    date: "6月23日 11:00〜12:00",
    place: "大教室",
    capacity: "受付終了",
    status: "closed",
    description: "チーム開発で工夫したことや困ったことを短時間で共有します。",
  },
];

function getStatusLabel(status: EventStatus) {
  if (status === "open") {
    return "受付中";
  }

  if (status === "few") {
    return "残りわずか";
  }

  if (status === "closed") {
    return "受付終了";
  }

  return "不明";
}

function App() {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.status === filter);

  return (
    <main className="app">
      <section className="hero">
        <p className="hero-label">React 第6回</p>
        <h1>学内イベント一覧</h1>
        <p>配列データをもとに、イベント情報を一覧表示するアプリです。</p>
      </section>

      <section className="controls">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          すべて
        </button>

        <button className={filter === "open" ? "active" : ""} onClick={() => setFilter("open")}>
          受付中
        </button>

        <button className={filter === "few" ? "active" : ""} onClick={() => setFilter("few")}>
          残りわずか
        </button>

        <button className={filter === "closed" ? "active" : ""} onClick={() => setFilter("closed")}>
          受付終了
        </button>
      </section>

      {filteredEvents.length > 0 ? (
        <section className="event-list">
          {filteredEvents.map((event) => (
            <article className="event-card" key={event.id}>
              <p className="category">{event.category}</p>

              <h2>{event.title}</h2>

              <p className="description">{event.description}</p>

              <p>日時：{event.date}</p>
              <p>場所：{event.place}</p>
              <p>定員：{event.capacity}</p>

              <p className={`status ${event.status}`}>{getStatusLabel(event.status)}</p>
            </article>
          ))}
        </section>
      ) : (
        <p className="empty-message">条件に合うイベントはありません。</p>
      )}
    </main>
  );
}

export default App;
