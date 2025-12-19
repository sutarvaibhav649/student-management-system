import { useAuth } from "../contexts/AuthContext"

const Task = () => {

  const {logout} = useAuth();

  return (
    <>
        <div className="min-h-screen p-6">
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

          <h1 className="text-2xl font-semibold mt-6">Tasks Page</h1>
        </div>

    </> 
  )
}

export default Task
