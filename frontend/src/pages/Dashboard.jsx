import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo, getTodos, toggleTodo, deleteTodo } from "../api";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // loading the todos on initial login
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        setMsg("Could not load todos");
      }
    };
    fetchTodos();
  }, []);

  // add a new todo
  async function handleAddTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const newTodo = await createTodo(text);
      setTodos([newTodo, ...todos]);
      setText("");
    } catch (error) {
        setMsg('Could not add todo');
    }
  }

  // Toggle a todo's completed state
  async function handleToggle(id, completed) {
    try {
      const updatedTodo = await toggleTodo(id, completed);
      setTodos(
        todos.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
    } catch (error) {
      setMsg("Could not update todo");
    }
  }

  // Delete a todo
  async function handleDelete(id) {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      setMsg("Could not delete todo");
    }
  }

  // function to logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
          {msg && <p className="text-red-500 mb-2">{msg}</p>}
          <form onSubmit={handleAddTodo} className="flex mb-4">
            <input
              type="text"
              placeholder="Add a todo"
              className="border p-2 flex-grow"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 rounded"
            >
              Add
            </button>
          </form>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo._id}
                className="flex justify-between items-center border-b p-2"
              >
                <span
                  onClick={() => handleToggle(todo._id, todo.completed)}
                  className={
                    todo.completed
                      ? "line-through cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDelete(todo._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
