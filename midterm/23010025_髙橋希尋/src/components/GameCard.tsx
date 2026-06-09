type GameCardProps = {
  title: string;
  platform: string;
  url: string;
  releaseDate: string;
  playDate: string;
  description: string;
};

export default function GameCard({
  title,
  platform,
  url,
  releaseDate,
  playDate,
  description,
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
      <p className="game-grid-description">{description}</p>
      <span className="game-grid-date">発売日：{releaseDate}</span>
      <span className="game-grid-date">プレイ年：{playDate}年</span>
    </a>
  );
}
