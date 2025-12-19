const TaskCard = ({ task, onToggle, onDelete }) => {
  if (!task) return null; // safety guard

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3
          className={`text-lg font-medium ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>

        <p className="text-sm text-gray-400">
          Priority: {task.priority}
        </p>

        {task.dueDate && (
          <p className="text-sm text-gray-400">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task)}
          className={`px-3 py-1 rounded text-sm ${
            task.completed
              ? "bg-yellow-500 text-black"
              : "bg-green-600 text-white"
          }`}
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
