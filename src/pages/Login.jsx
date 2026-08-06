import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="block w-full p-3 bg-blue-600 text-white rounded"
      >
        Se connecter
      </button>
      {error && <p className="error-form">Identifiants invalides</p>}
    </form>
  );
}
