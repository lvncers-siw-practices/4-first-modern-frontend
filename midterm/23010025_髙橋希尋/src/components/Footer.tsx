import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026</p>
      <p>さいたま IT・WEB 専門学校 高度専門士情報技術科 4年</p>
      <p>
        学籍番号: 23010025 名前:
        <a
          className="footer-link"
          href="https://www.lvncer.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="footer-name">髙橋希尋</span>
        </a>
      </p>
      <p>モダンフロントエンド開発 中間課題</p>
    </footer>
  );
}

export default Footer;
