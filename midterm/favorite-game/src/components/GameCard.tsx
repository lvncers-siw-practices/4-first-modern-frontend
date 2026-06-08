type GameCardProps = {
  title: string;
  platform: string;
  url: string;
  releaseDate: string;
  playDate: string;
};

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-");

  return `${year}年${Number(month)}月${Number(day)}日`;
}

export default function GameCard({
  title,
  platform,
  url,
  releaseDate,
  playDate,
}: GameCardProps) {
  return (
    <a
      className="game-grid-item"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="game-grid-title">{title}</span>
      <span className="game-grid-platform">{platform}</span>
      <span className="game-grid-date">発売日：{formatDate(releaseDate)}</span>
      <span className="game-grid-date">プレイ年：{playDate}年</span>
    </a>
  );
}
