import "../App.css";

function ProfileCard() {
  const name = "髙橋 希尋";
  const job = "Next.js 狂信者には React はきつい。app router 無しとかデフォルト SSR (Server Side Rendering)無しとか正気か！！！？？と思ってしまうのでした。あとランタイムにbun使わない人とは絶対仲良くなれない。";
  const message = "ゴールデンウィークは全てゲームに捧げたものです。";

  return (
    <section className="profile-card">
      <div className="profile-icon">TK</div>

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
