# Dept-X

> Department management web app (Node.js + Express + MongoDB)
> Simple college/dept portal for students, notice board, resources and authentication.

---

## 🚀 Live Demo

🔗 https://dept-x.onrender.com

---

## 📷 Application Preview

| Desktop View                                                                                                                         | Mobile View                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|<img width="1894" height="890" alt="desktop" src="https://github.com/user-attachments/assets/5048462f-8d54-4329-95c8-4b6035edd230" />  |<img width="457" height="898" alt="Screenshot 2026-03-11 103942" src="https://github.com/user-attachments/assets/f0cf6db3-5bb5-44ba-90c8-5ae5577218b3" />|



---

## 🚀 Project Overview

`Dept-X` is an Express-based education portal with:

* Authentication system (Signup/Login)
* Student profile management
* Notice board system
* Resource sharing (documents / links)
* EJS templating based UI

The goal of the project is to simulate a **simple department portal** where students can access notices, resources, and their profiles.

---

## 🧱 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-DD0031?style=for-the-badge\&logo=ejs\&logoColor=white)
![Method Override](https://img.shields.io/badge/method--override-030303?style=for-the-badge)
![Router](https://img.shields.io/badge/router-007ACC?style=for-the-badge)

### Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ODM
* **EJS + ejs-mate** – Template engine
* **method-override** – Enables PUT/PATCH/DELETE in forms
* **Express Router** – Modular route handling

---

## 📁 Repository Structure

```
Dept-X
│
├── app.js
├── config/
│   └── db.js
│
├── controllers/
│
├── models/
│
├── routes/
│
├── middleware/
│
├── views/
│
├── public/
│   └── css/
│       └── style.css
│
├── scripts/
│   └── findSignedInStudent.js
│
├── init/
│   └── data.js
│
├── assets/
│   ├── desktop-view.png
│   └── mobile-view.png
│
└── README.md
```

---

## ⚙️ Setup

### 1️⃣ Clone the repository

```
git clone <repo-url>
cd Dept-X
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start MongoDB

Run MongoDB locally:

```
mongod
```

(or use your MongoDB service)

### 4️⃣ Run the project

```
npm start
```

### 5️⃣ Open in browser

```
http://localhost:3000
```

(or the port configured in `app.js`)

---

## 🧩 Routes Overview

| Route           | Description                     |
| --------------- | ------------------------------- |
| GET /           | Home page                       |
| GET /signup     | Signup page                     |
| POST /signup    | Register user                   |
| GET /login      | Login page                      |
| POST /login     | Login user                      |
| GET /profile    | Student profile (auth required) |
| GET /notices    | View notices                    |
| GET /addnotice  | Add notice page                 |
| POST /addnotice | Create notice                   |
| GET /resources  | View resources                  |
| GET /addrs      | Add resource page               |
| POST /addrs     | Add resource                    |
| GET /students   | View students                   |
| GET /addgpa     | Add GPA                         |
| POST /addgpa    | Save GPA                        |

Check the `routes/` directory for full implementation.

---

## 🛠️ Development Tips

* Run the project with:

```
npm start
```

* Use `.env` with **dotenv** for environment variables.
* Add **bcrypt** for password hashing.
* Add **express-session** for authentication.
* Use **connect-mongo** to store sessions in MongoDB.
* Validate inputs using **express-validator**.

---

## 🧪 Testing (Recommended)

Testing can be added using:

* **Mocha**
* **Chai**
* **Supertest**

---

## 🔐 Security Notes

For production readiness:

* Hash passwords with **bcrypt**
* Use **HTTPS**
* Sanitize and validate user inputs
* Implement **session-based authentication**

---

## 🚀 Future Improvements

Possible upgrades:

* Role-based authentication (Admin / Instructor / Student)
* REST API endpoints (JSON)
* File uploads for resources
* Better logging and error handling
* Notifications system
* UI improvements

---

## 👨‍💻 Author

**Swapneel Sarkar**

---

⭐ If you like this project, consider giving it a **star on GitHub**.
