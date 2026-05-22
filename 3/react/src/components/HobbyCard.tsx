import "../App.css";

function HobbyCard() {
  const hobbyTitle = "趣味";
  const hobbyText =
    "休日は音楽を聴いたり、ゲームをしたり、気になるWebサイトを見たりしています。最近は、デザインのきれいなサイトを見るのが好きです。";

  return (
    <section className="info-card">
      <p className="section-label">Hobby</p>
      <h2>{hobbyTitle}</h2>
      <p>{hobbyText}</p>
    </section>
  );
}

export default HobbyCard;
