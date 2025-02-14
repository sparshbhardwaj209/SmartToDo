const BASE_URL = "http://localhost:5000/api";

// registering the user
export async function registerUser(email, password) {
  try {
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

    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
