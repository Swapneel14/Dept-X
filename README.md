# Dept-X

> Department management web app (Node.js + Express + MongoDB)
> Simple college/dept portal for students, notice board, resources and authentication.

## 🚀 Project Overview

`Dept-X` is an Express-based education portal with:
- Auth flow (signup/login)
- Student profile
- Notices management
- Resource posting (documents/links)
- EJS templating UI

## 🧱 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![EJS](https://img.shields.io/badge/EJS-DD0031?style=for-the-badge&logo=ejs&logoColor=white) ![Method Override](https://img.shields.io/badge/method--override-030303?style=for-the-badge) ![Router](https://img.shields.io/badge/router-007ACC?style=for-the-badge)

- Node.js: JavaScript runtime
- Express: web framework
- MongoDB: NoSQL database
- Mongoose: ODM for MongoDB
- EJS + ejs-mate: view templates
- method-override: HTML form verb support
- router: structured route handling

---

## 📁 Repository structure

- `app.js` - main app entry
- `config/db.js` - DB setup
- `controllers/` - route handler logic
- `models/` - Mongoose model schemas
- `routes/` - route definitions
- `views/` - EJS templates
- `public/css/style.css`
- `middleware/` - auth/route middleware
- `init/data.js` - example initial data
- `scripts/findSignedInStudent.js` - helper script

---

## ⚙️ Setup

1. Clone:
   - `git clone <repo-url> && cd Dept-X`
2. Install:
   - `npm install`
3. Start MongoDB locally:
   - `mongod` (or your MongoDB service)
4. Run:
   - `npm start`
5. Open:
   - `http://localhost:3000` (or configured port in `app.js`)

---

## 🧩 Usage

- `GET /` - home/landing
- `GET /signup`, `POST /signup` - user registration
- `GET /login`, `POST /login` - user login
- `GET /profile` - student profile (auth required)
- `GET /notices`, `GET /addnotice`, `POST /addnotice` - notices
- `GET /resources`, `GET /addrs`, `POST /addrs` - resources
- `GET /students`, `GET /addgpa`, `POST /addgpa` etc.

> See each route file in `routes/` for full path and behavior.

---

## 🛠️ Development tips

- Use `npm start`
- Add environment support via `.env` and `dotenv`
- Add encryption and session auth with `bcrypt`, `express-session`, `connect-mongo`
- Validate user inputs with `express-validator`

---

## 🧪 Testing

No tests included yet. Recommended extension:
- Mocha + Chai + Supertest

---

## 🔐 Security notes

- Add bcrypt hashing for passwords
- Use HTTPS in production
- Sanitize and validate user input

---

## 🚀 Improvements

- Role-based access (admin/instructor/student)
- API endpoints (JSON)
- File upload for resources
- Logging and error reporting

---

