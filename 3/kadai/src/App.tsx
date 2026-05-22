import "./App.css";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Profile from "./components/ProfileCard.tsx";
import GameSection from "./components/GameSection.tsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Profile />
        <GameSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
