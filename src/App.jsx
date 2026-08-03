import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex-1 max-w-4xl mx-auto p-4">
        <img
          src="/accueil.svg"
          alt="Bienvenue sur TaskManager"
          style={{
            display: "block",
            margin: "auto",
            width: "100%",
            maxWidth: "820px",
          }}
        />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;