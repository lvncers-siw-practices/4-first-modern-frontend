import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import HobbyCard from "./components/HobbyCard";
import FavoriteCard from "./components/FavoriteCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <ProfileCard />
        <div className="card-area">
          <HobbyCard />
          <FavoriteCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
