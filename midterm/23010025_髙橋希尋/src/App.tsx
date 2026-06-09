import Header from "./components/Header";
import GameSection from "./components/GameSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <GameSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
