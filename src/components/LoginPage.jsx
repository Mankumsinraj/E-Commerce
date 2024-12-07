import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline focus:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline focus:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage
