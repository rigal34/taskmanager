

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TaskManager</h1>
        <nav>
          <a className="mr-4" href="index.html">
            Accueil
          </a>
          <a className="mr-4" href="tasks.html">
            Tâches
          </a>
          <button className="underline">Déconnexion</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;