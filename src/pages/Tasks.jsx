import { Link } from "react-router-dom";

export default function Tasks() {
  return (
    <div>
      <h2>Mes Tâches</h2>
      <Link className="inline-block mb-4 text-blue-600 underline" to="/create">
        + Nouvelle tâche
      </Link>
      <div className="gap-4 border rounded p-4 mb-3 shadow flex justify-between items-center bg-white hover:bg-gray-50 transition">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
              À faire
            </span>
            <p className="text-lg font-semibold">Apprendre à utiliser React</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Bases de React + React avancé
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded">
            Terminer
          </button>
          <Link
            className="bg-yellow-500 text-white px-3 py-1 rounded"
            to="/edit"
          >
            Modifier
          </Link>
          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
