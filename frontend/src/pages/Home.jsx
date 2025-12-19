import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* ---------- Header ---------- */}
      <header className="flex justify-between items-center px-8 py-6 bg-gray-800 shadow">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* ---------- Hero Section ---------- */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Organize Your Tasks.<br />Stay Productive.
        </h2>

        <p className="text-gray-400 max-w-2xl mb-8">
          A secure and simple task management application that helps you
          create, track, and complete tasks efficiently.  
          Built with modern full-stack technologies.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded font-semibold"
          >
            Login
          </button>
        </div>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="text-center py-4 text-gray-500 bg-gray-800">
        © {new Date().getFullYear()} All rights reserved
      </footer>
    </div>
  );
};

export default Home;
