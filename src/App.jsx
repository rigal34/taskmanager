import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registeur from "./pages/Register";
import Tasks from "./pages/Tasks";
import CreatTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="flex flex-col min-h-screen">
      <Header token={token} setToken={setToken} />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login setToken={setToken} />} />

          <Route path="/register" element={<Registeur />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/create" element={<CreatTask />} />

          <Route path="/edit" element={<EditTask />} />

          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
