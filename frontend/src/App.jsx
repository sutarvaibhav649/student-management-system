import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Register.jsx";
import Tasks from "./pages/Task.jsx";
import AddTask from "./pages/AddTask.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ---------- Public Routes ---------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        {/* ---------- Protected Routes ---------- */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Tasks />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/new"
          element={
            <ProtectedRoute>
              <AppLayout>
                <AddTask />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* ---------- Default / Fallback ---------- */}
       
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
