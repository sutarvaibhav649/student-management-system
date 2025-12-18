import React from 'react'
import {Link} from "react-router-dom";
const Login = () => {
  return (
    // outer div
      <div className=' min-h-screen flex justify-center items-center bg-gray-900'>
        <div className=' w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8'>
          <h1 className=' text-2xl font-bold text-center text-white mb-6'>
            Login
          </h1>
          {/* ================= login form starts ================ */}
          <form className=' space-y-4'>
            <div>
              {/* ========= Email input starts ========== */}
              <label className=' block text-sm text-gray-300 mb-1'>
                Email
              </label>
              <input 
                type="email"
                placeholder='you@example.com'
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
                className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
              />
              {/* ========= Password input Ends ========== */}
            </div>
            {/* =========== Login Button starts =========== */}
            <button
              type='submit' 
              className=' w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition hover:cursor-pointer'           
            >  
            Login
            </button>
          
            {/* =========== Login Button ends =========== */}
          </form>
          {/* ================= login form ends ================ */}
          <p className='text-sm text-gray-400 text-center mt-4'>
            Don't have an account?{" "}
            <Link to="/register" className='text-blue-400 hover:underline'>
              Register
            </Link>
          </p>
        </div>
      </div>
  )
}

export default Login
