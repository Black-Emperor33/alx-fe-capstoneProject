import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-lg font-bold">FlowForge</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">👋 {user?.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;