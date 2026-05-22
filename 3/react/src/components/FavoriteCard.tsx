import "../App.css";

function FavoriteCard() {
  const favoriteTitle = "好きなもの";
  const favoriteText =
    "好きな技術はHTML、CSS、JavaScriptです。これからReactとTypeScriptを使って、より本格的なWebアプリケーションを作れるようになりたいです。";

  return (
    <section className="info-card">
      <p className="section-label">Favorite</p>
      <h2>{favoriteTitle}</h2>
      <p>{favoriteText}</p>
    </section>
  );
}

export default FavoriteCard;
