import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("login successfull");
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <form
  //         onSubmit={handleLogin}
  //         className="bg-white p-6 rounded shadow-md w-80"
  //       >
  //         <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
  //         {msg && <p className="text-red-500 mb-2">{msg}</p>}
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           className="border p-2 w-full mb-4"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           className="border p-2 w-full mb-4"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <button
  //           type="submit"
  //           className="bg-blue-500 text-white p-2 w-full rounded"
  //         >
  //           Login
  //         </button>
  //         <p className="mt-4 text-center">
  //           New user?{" "}
  //           <Link to="/register" className="text-blue-500">
  //             Register
  //           </Link>
  //         </p>
  //       </form>
  //     </div>
  //   );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading and subheading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome Back to Smart To-Do</h1>
        <p className="mt-2 text-gray-600">
          Please login to manage your tasks and boost your productivity.
        </p>
      </div>

      {/* Login form */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {msg && <p className="text-red-500 mb-2">{msg}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          New user?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
