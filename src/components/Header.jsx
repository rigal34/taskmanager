import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TaskManager</h1>
        <nav>
          <Link className="mr-4" to="/">
            Accueil
          </Link>
          <Link className="mr-4" to="/tasks">
            Tâches
          </Link>
          <Link className="mr-4" to="/login">
            Connexion
          </Link>
          
          <Link className="mr-4" to="/register">
            Inscription
          </Link>

          <button className="underline">Déconnexion</button>

        </nav>
      </div>
    </header>
  );
}

export default Header;
