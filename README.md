#  🚀 Smart To-Do Application

Welcome to **Smart To-Do** – your smart solution to manage tasks efficiently! This full-stack application provides secure authentication, intuitive to-do management, and a modern responsive design, all wrapped in a user-friendly interface. ⭐

---

##  📖 Introduction
**Smart To-Do** is a task management web application where you can register, log in, and seamlessly manage your daily tasks. With a secure backend and a sleek frontend, the app lets you create, update, and delete your to-dos with ease. Whether you’re planning your day or tracking your projects, Smart To-Do is here to help! 🍡

---

## ⭐ Features
- **🔒 Secure User Authentication:**
  - Register and log in using JWT tokens
  - Password hashing with bcrypt for enhanced security

- **📝 To-Do Management:**
  - **Create:** Add new tasks with a click
  - **Update:** Toggle tasks as complete or incomplete
  - **Delete:** Remove tasks effortlessly
  - **View:** See all your tasks when you log in

- **🔐 Protected Routes:**
  - Access your dashboard and to-dos only after authentication

- **📱 Responsive Design:**
  - Built with Tailwind CSS to ensure a great experience on any device

- **🔄 Full-Stack Integration:**
  - Smooth communication between the React frontend and Express/MongoDB backend

---

## 🛠 Technologies Used
### Backend:
- **Node.js** & **Express.js** for server-side development
- **MongoDB** with **Mongoose** for data storage
- **JSON Web Tokens (JWT)** for secure authentication
- **bcrypt.js** for password hashing

### Frontend:
- **React** for building interactive UIs
- **Vite** for fast project scaffolding
- **Tailwind CSS** for modern, utility-first styling
- **Fetch API** for making HTTP requests
- **React Router** for client-side routing

---

## 💻 Local Installation
### Prerequisites:
- [Node.js](https://nodejs.org/) and npm installed on your machine
- A running instance of [MongoDB](https://www.mongodb.com/) (local or cloud)

## Setting Up

## Setting up Backend:

1. **Clone the Repository & Navigate to the Backend Folder:**

   ```bash
   git clone https://github.com/sparshbhardwaj209/SmartToDo.git
   ```

2. **For Backend:**
   - ***Install Dependencies***
   ```bash
   cd backend
   npm install
   ```

 4. **Create a .env file:**
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the Backend Server:**
   ```bash
   npm run start
   ```

## Setting up Frontend:

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   
#  🚀 How to Use Smart To-Do

##  1. Registration:
  - Open your browser and navigate to http://localhost:3000/register
  - Fill in your Email and Password
  - Click Register to create your account
  - After successful registration, you’ll be redirected to the Login page

## 2. Login:
  - Head over to http://localhost:3000/login
  - Enter your registered email and password
  - On success, a JWT token is saved in your browser, and you’ll be redirected to your Dashboard

## 3. Dashboard & To-Do Management:
  - Once logged in, the Dashboard displays all your current tasks
  - Create a Task: Use the input field to add a new task and click Add
  - Toggle Task Status: Click on a task to mark it as completed or incomplete
  - Delete a Task: Click Delete to remove a task from your list
  - Logout: Click the Logout button to end your session

# 🎉 Conclusion
Smart To-Do is designed to simplify task management while showcasing modern web development practices. Enjoy a seamless, secure, and interactive experience that boosts your productivity! Feel free to fork, customize, and extend this project as needed. Happy coding! 💻✨
