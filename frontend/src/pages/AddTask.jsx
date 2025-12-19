import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/api";

const AddTask = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    try {
      setLoading(true);
      await createTask(formData);
      navigate("/tasks"); // 👈 go back to list
    } catch (err) {
      setError("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

        {error && (
          <p className="text-red-400 mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />

          <textarea
            name="description"
            placeholder="Task description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />

          <div className="flex gap-4">
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
            >
              {loading ? "Saving..." : "Save Task"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
