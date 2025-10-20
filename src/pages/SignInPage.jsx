import React, { useState } from "react";
import { motion } from "framer-motion";

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation example
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Sign In Data:", formData);
    setError("");
    alert("Successfully signed in!");
    setFormData({ email: "", password: "", remember: false });
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gray-50 font-Titillium px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your Coffee Cafe account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 focus:ring-primary"
              />
              Remember me
            </label>
            <a href="#" className="hover:text-primary">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Sign In
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignInPage;
