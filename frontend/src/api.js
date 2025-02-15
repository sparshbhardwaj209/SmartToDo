const BASE_URL = import.meta.env.VITE_BASE_URL;


//helper function
function getAuthHeaders() {
  const token = localStorage.getItem("token");
  console.log(token);
  return token
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : { "Content-Type": "application/json" };
}

// registering the user
export async function registerUser(email, password) {
  try {
    console.log("header function called");
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Registration Failed");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

// login in the user
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
}

// getting all todo
export async function getTodos() {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

// creating a todo
export async function createTodo(text) {
  try {
    console.log("function called happen");
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not add todo");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

// updating a todo
export async function toggleTodo(id, completed) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ completed: !completed }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not update Todo");
    }
    return data; // Updated todo
  } catch (error) {
    throw error;
  }
}

//deleting a todo
export async function deleteTodo(id) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not delete Todo");
    }
    return data; // e.g., { message: "Todo deleted" }
  } catch (error) {
    throw error;
  }
}
