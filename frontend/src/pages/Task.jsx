import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getTasks, updateTask, deleteTask } from "../services/api";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  /* ---------- State ---------- */
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [statusFilter, setStatusFilter] = useState("all"); // all | pending | done
  const [priorityFilter, setPriorityFilter] = useState("all"); // all | low | medium | high

  /* ---------- Fetch Tasks ---------- */
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(res.data.data);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* ---------- Task Actions ---------- */
  const handleToggleComplete = async (task) => {
    try {
      await updateTask(task._id, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  /* ---------- Filters ---------- */
  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === "pending" && task.completed) return false;
    if (statusFilter === "done" && !task.completed) return false;

    if (priorityFilter !== "all" && task.priority !== priorityFilter)
      return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ---------- Main ---------- */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Title + Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Tasks</h2>

          <button
            onClick={() => navigate("/tasks/new")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
          >
            + Add Task
          </button>
        </div>

        {/* ---------- Filters ---------- */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="done">Completed</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            onClick={() => {
              setStatusFilter("all");
              setPriorityFilter("all");
            }}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Clear
          </button>
        </div>

        {/* ---------- Loading ---------- */}
        {loading && <p className="text-gray-400">Loading tasks...</p>}

        {/* ---------- Error ---------- */}
        {error && <p className="text-red-400 mb-3">{error}</p>}

        {/* ---------- Empty State ---------- */}
        {!loading && filteredTasks.length === 0 && (
          <div className="bg-gray-800 rounded-lg p-6 text-center text-gray-400">
            No tasks match the selected filters
          </div>
        )}

        {/* ---------- Task List ---------- */}
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onToggle={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tasks;
