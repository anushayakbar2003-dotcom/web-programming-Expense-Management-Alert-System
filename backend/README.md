# Smart Expense Manager Backend

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Features
- User Signup/Login
- JWT Authentication
- Expense Management
- Alert System
- REST API

---

## Installation

### 1. Open terminal inside backend folder

```bash
npm install
```

### 2. Create .env file

```env
MONGO_URI=mongodb://localhost:27017/fintechDB
```

### 3. Run Server

```bash
npx nodemon server.js
```

Server will run on:

```bash
http://localhost:5000
```

---

## API Routes

### Authentication
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Expense Routes
- POST `/api/expense/add`
- GET `/api/expense/all`
- GET `/api/expense/alerts`

---

## Database Collections
- users
- expenses

---

## Security
- JWT Authentication
- Protected Routes
- Input Validation

---

## Author
23i5504
