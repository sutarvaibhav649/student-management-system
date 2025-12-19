import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { loginUser } from '../services/api.js';
import { useAuth } from "../contexts/AuthContext.jsx";
const Login = () => {

  const navigate = useNavigate();

  const {login} = useAuth();

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");


  const handleChanges = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser({
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });
      console.log("Login response",res);
      
      login(res.data.data.token);
      navigate("/tasks")
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    }finally{
      setLoading(false);
    }
  }

  return (
    // outer div
      <div className=' min-h-screen flex justify-center items-center bg-gray-900'>
        <div className=' w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8'>
          <h1 className=' text-2xl font-bold text-center text-white mb-6'>
            Login
          </h1>
          {error && (<p className="text-red-400 text-sm mb-3">{error}</p>)}
          {/* ================= login form starts ================ */}
          <form onSubmit={handleSubmit} className=' space-y-4'>
            <div>
              {/* ========= Email input starts ========== */}
              <label className=' block text-sm text-gray-300 mb-1'>
                Email
              </label>
              <input 
                type="email"
                placeholder='you@example.com'
                onChange={handleChanges}
                name='email'
                className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
              />
              {/* ========= Email input Ends ========== */}
              {/* ========= Password input starts ========== */}
              <label className='block text-sm text-gray-300 mb-1'>
                Password
              </label>
              <input
                type='password'
                placeholder='**********'
                onChange={handleChanges}
                name='password'
                className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
              />
              {/* ========= Password input Ends ========== */}
            </div>
            {/* =========== Login Button starts =========== */}
            <button
            disabled={loading}
              type='submit' 
              className=' w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition hover:cursor-pointer'           
            >  
            {loading ? "logging in ..." : "Login"}
            </button>
          
            {/* =========== Login Button ends =========== */}
          </form>
          {/* ================= login form ends ================ */}
          <p className='text-sm text-gray-400 text-center mt-4'>
            Don't have an account?{" "}
            <Link to="/signup" className='text-blue-400 hover:underline'>
              Register
            </Link>
          </p>
        </div>
      </div>
  )
}

export default Login
