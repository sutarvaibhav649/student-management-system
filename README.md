
##  Task Manager

**Task Manager – Full Stack Internship Project**

---

## Project Description

Task Manager is a **full-stack web application** developed as part of an internship project.
The application allows users to securely manage their personal tasks by creating, viewing, filtering, updating, and deleting tasks.

The project is built using **modern frontend and backend technologies** and follows clean architectural practices such as authentication, protected routes, and separation of concerns.

---

## Features

###  Authentication
* User registration and login
* JWT-based authentication
* Protected routes for authorized users
* Password hashing using **bcrypt**

### Task Management

* Create tasks with:

  * Title
  * Description
  * Priority (Low / Medium / High)
  * Due Date
* Mark tasks as **Completed** or **Pending**
* Delete tasks
* Each user can access **only their own tasks**

### Filtering

* Filter tasks by:

  * Status (All / Pending / Completed)
  * Priority (Low / Medium / High)
* Clear filter options

### User Interface

* Responsive UI using **Tailwind CSS**
* Global Navbar with Logout
* Dedicated pages for:

  * Task listing
  * Add task form
* Public Home page for onboarding

---

## Technology Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JSON Web Tokens (JWT)
* bcryptjs

---

##  Project Structure

```text
project-root/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Tasks.jsx
│   │   │   └── AddTask.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## Authentication Flow

1. User registers or logs in
2. Backend generates a JWT token
3. Token is stored in `localStorage`
4. Axios interceptor attaches the token to every request
5. Protected routes are accessible only to authenticated users

---

## API Endpoints

### Authentication

```http
POST /api/auth/signup
POST /api/auth/login
```

### Tasks (Protected)

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## Environment Variables

### Backend (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### Frontend (`.env`)

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## How to Run the Project Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/sutarvaibhav649/student-management-system
cd student-management-system
```

### Step 2: Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Step 3: Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Step 4: Open in Browser

```text
http://localhost:5173
```

---

## Design Decisions

* **Separation of Concerns**
  Backend follows controller–service–repository architecture.

* **JWT Interceptor**
  Authorization headers are handled globally using Axios interceptors.

* **Explicit Defaults**
  Task completion state is enforced in the service layer.

* **Clean UX Flow**
  Task listing and task creation are separated into different pages.

---

---

##  Author

**Vaibhav Sutar**
Final-Year Undergraduate – Computer Science & Engineering
Aspiring Full-Stack Developer (MERN)

---

## License

This project is created for 
**internship purposes**.

---

