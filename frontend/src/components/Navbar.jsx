import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow">
      <h1
        onClick={() => navigate("/tasks")}
        className="text-xl font-bold text-white cursor-pointer"
      >
        Task Manager
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
