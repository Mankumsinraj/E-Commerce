import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {StoreContext} from "../context/store"
import {Actions} from "../context/action"
// import { useAuth } from './components/auth';

function Auth() {
  const {dispatch } = useContext(StoreContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("auth", 1)
    dispatch({type: Actions.LOGIN})
    // try {
    //   await login(email, password);
    navigate('/');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className='flex  mx-auto items-center justify-center min-h-screen bg-gray-100'>
    <form 
    onSubmit={handleSubmit} 
    className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
  >
    <label className="block mb-4">
      <span className="block text-gray-700 font-medium mb-2">Email:</span>
      <input 
        type="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
      />
    </label>
    <label className="block mb-4">
      <span className="block text-gray-700 font-medium mb-2">Password:</span>
      <input 
        type="password" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
      />
    </label>
    <button 
      type="submit" 
      className="block w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
    >
      Login
    </button>
  </form>
  </div>
  );
}

export default Auth;
