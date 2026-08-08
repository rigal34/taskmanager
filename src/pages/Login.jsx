import { useState } from "react";

export default function CreateTask() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titre, description);
  };

  return (
    <form className="bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Nouvelle tâche</h2>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="block w-full p-3 bg-blue-600 text-white rounded"
      >
        Créer
      </button>
    </form>
  );
}
