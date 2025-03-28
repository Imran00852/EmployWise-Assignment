# User Management Dashboard

This is a React-based user management dashboard that allows users to log in, view a list of users, update user details, and delete users using the [Reqres API](https://reqres.in/). The project uses Redux for state management, RTK Query for API requests, and Material-UI (MUI) for UI components. React Router is used to protect routes based on authentication status.

## 🚀 Technologies Used

- **React.js** - Frontend framework
- **Redux Toolkit** - State management
- **RTK Query** - API fetching
- **Material-UI (MUI)** - UI components and styling
- **React Router DOM** - Routing and protected routes

## 🔑 Features

- **User Authentication** (Login/Signup)
- **Fetch Users** (List users from Reqres API)
- **Update User** (Edit user details)
- **Delete User** (Remove a user from the list)
- **Routing** (Routing for login/userlist)

---

## 📌 Reqres API Endpoints Used

### 1️⃣ **User Authentication**

- **Login:** `POST https://reqres.in/api/login`

  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```

  **Response:**

  ```json
  {
    "token": "QpwL5tke4Pnpja7X4"
  }
  ```

- **Signup:** `POST https://reqres.in/api/register`
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }
  ```
  **Response:**
  ```json
  {
    "id": 4,
    "token": "QpwL5tke4Pnpja7X4"
  }
  ```

### 2️⃣ **User Management**

- **Get All Users:** `GET https://reqres.in/api/users?page=1`
- **Update User:** `PUT https://reqres.in/api/users/:id`

  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@example.com"
  }
  ```

  **Response:** `{}` (No data returned, since Reqres is a mock API)

- **Delete User:** `DELETE https://reqres.in/api/users/:id`
  **Response:** `{}` (Reqres does not actually delete users, only simulates a response)

---

## 🔒 Protected Routes (React Router DOM)

Protected routes ensure that only authenticated users can access certain pages. If a user is not logged in, they are redirected to the login page.

---

## 🛠 How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/Imran00852/EmployWise-Assignment.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

---

## Deployment

### 🚀 Live URL: https://employ-wise-assignment-tau.vercel.app

---

## 📜 License

This project is for educational purposes only, built using the Reqres API.

---
