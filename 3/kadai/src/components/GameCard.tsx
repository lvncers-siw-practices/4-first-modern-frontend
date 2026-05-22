type GameCardProps = {
  title: string;
  platform: string;
};

export default function GameCard({ title, platform }: GameCardProps) {
  return (
    <article className="game-grid-item">
      <span className="game-grid-title">{title}</span>
      <span className="game-grid-platform">{platform}</span>
    </article>
  );
}
