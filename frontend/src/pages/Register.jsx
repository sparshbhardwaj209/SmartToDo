import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
      {/* Heading and subheading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#e3e3e3]">Welcome to Smart To-Do</h1>
        <p className="mt-2 text-[#e3e3e3]">
          Please register to start managing your tasks efficiently.
        </p>
      </div>

      {/* Registration form */}
      <form
        onSubmit={handleRegister}
        className="bg-[#1a1a1a] p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-white">Register</h2>
        {msg && <p className="text-red-500 mb-2">{msg}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Register
        </button>
        <p className="mt-4 text-center text-white">
          Already registered?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
