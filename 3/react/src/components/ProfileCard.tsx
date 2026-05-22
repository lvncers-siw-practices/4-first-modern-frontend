import "../App.css";

function ProfileCard() {
  const name = "山田 太郎";
  const job = "フロントエンドエンジニアを目指す学生";
  const message =
    "Webサイト制作やアプリ開発に興味があります。見やすく、使いやすい画面を作れるようになることを目標に勉強しています。";

  return (
    <section className="profile-card">
      <div className="profile-icon">YT</div>

      <div className="profile-content">
        <p className="section-label">Profile</p>
        <h2>{name}</h2>
        <p className="job">{job}</p>
        <p className="message">{message}</p>
      </div>
    </section>
  );
}

export default ProfileCard;
