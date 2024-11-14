import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Eye, EyeOff, Shield } from 'lucide-react';
import axios from 'axios';
import logo from '../assets/logo.jpg'; 


export default function AdminSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [welcomeMessage, setWelcomeMessage] = useState(false);

  const navigate = useNavigate(); 

  const handleSignin = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setErrorMessage(''); 

    try {
      const response = await axios.post("https://safemax-security-uxq6.onrender.com/api/v1/admin/adminUsers/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setLoading(false); 
      setWelcomeMessage(true); 

      setTimeout(() => {
        setWelcomeMessage(false);
        navigate("/dashboard"); 
      }, 2000); 

    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials. Please try again."); 
      } else {
        setErrorMessage("Something went wrong. Please try again later."); 
      }
      console.error("Sign-in error:", error); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-7 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <a href="">
          <img
            src={logo}
            alt="1729957758751"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </a>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Admin Sign In
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full px-4 sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSignin}> 
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {loading ? "Signing in..." : "Sign in to Admin Dashboard"}
              </button>
            </div>
          </form>

          {errorMessage && (
            <div className="mt-4 text-center text-sm text-red-500">{errorMessage}</div>
          )}

          {welcomeMessage && (
            <div className="mt-4 text-center text-sm text-green-500">
              Welcome! Redirecting to the dashboard...
            </div>
          )}

          <div className="mt-6">
            
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Shield className="h-5 w-5 mr-2" />
                This is a secure area. Only authorized personnel should attempt to sign in.
              </div>
            </div>
          </div>
          <br />  
          <div>
              <button
                type="button" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={() => navigate("/")} 
              >
                Go back to Home
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
