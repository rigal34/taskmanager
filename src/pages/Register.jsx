import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!email || !password){
      return;
    }
   await axios.post("http://localhost:3000/register",{email, password})
   navigate("/login");
    
  };

  return (
    <form className="bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Inscription</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)} required
        className="block w-full mb-3 p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="block w-full p-3 bg-blue-600 text-white rounded"
      >
        S'inscrire
      </button>
    </form>
  );
}
