# ⚙️ Inventory Management — Server

The backend application for the Inventory Management System, built with **Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL**.

> 🚧 **Status:** Currently under development

---

## ✨ Overview

The Server application provides the backend infrastructure and REST API for the Inventory Management System.

It is responsible for handling application logic, communicating with the PostgreSQL database, and providing API endpoints for the frontend client.

The backend is being developed with a focus on clean architecture, database management, API development, and scalable backend practices.

---

## 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js 5**
* **TypeScript**
* **REST API**

### Database

* **PostgreSQL**
* **Prisma ORM 7**
* **@prisma/adapter-pg**
* **pg**

### Middleware & Security

* **CORS**
* **Helmet**
* **Morgan**
* **Body Parser**
* **dotenv**

### Development Tools

* **tsx**
* **Nodemon**
* **TypeScript**
* **Rimraf**

---

## 📁 Project Structure

```text id="k5j2op"
server/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── src/
│   ├── ...
│   └── index.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

> The structure may evolve as the backend continues to be developed.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash id="3tq9x4"
git clone https://github.com/danial137/inventory-.git
```

### 2. Navigate to the server

```bash id="d9t0qz"
cd inventory-/server
```

### 3. Install dependencies

```bash id="m8j7vx"
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env id="q4f2az"
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/inventorymanagment"
PORT=8000
```

Replace the database credentials with your local PostgreSQL configuration.

> Never commit your `.env` file or database credentials to GitHub.

---

## 🗄️ Database Setup

This project uses **PostgreSQL** as the database and **Prisma ORM** for database access.

After configuring your `DATABASE_URL`, generate the Prisma client:

```bash id="p7r3mx"
npx prisma generate
```

Run your Prisma migrations when required:

```bash id="w8c4kn"
npx prisma migrate dev
```

---

## 🌱 Database Seeding

The project includes a Prisma seed script.

Run:

```bash id="x1d6hf"
npm run seed
```

The seed command executes:

```bash id="q9n5rt"
tsx prisma/seed.ts
```

This can be used to populate the database with initial development data.

---

## 💻 Development

Start the development server with:

```bash id="j2v6cp"
npm run dev
```

The development script uses **Nodemon** and **tsx** to automatically restart the server when source files change.

The API is configured to run locally on the configured port.

For example:

```text id="r7y3mn"
http://localhost:8000
```

---

## 🏗️ Production Build

Create a production build:

```bash id="a8f4sd"
npm run build
```

This command:

1. Removes the existing `dist` directory
2. Compiles the TypeScript source code
3. Generates the production output

Start the production server:

```bash id="n4q1xe"
npm start
```

---

## 📡 API

The backend exposes REST API endpoints that are consumed by the frontend application.

The API layer is currently under development and will continue to expand as new inventory management functionality is implemented.

Planned API areas include:

* Products
* Sales
* Purchases
* Inventory
* Dashboard data
* User-related functionality

---

## 🔒 Security & Middleware

The server uses several middleware packages to improve security, logging, and request handling:

### Helmet

Used to add security-related HTTP headers.

### CORS

Configured to allow communication between the frontend and backend applications.

### Morgan

Used for HTTP request logging during development.

### Body Parser

Used for parsing incoming request bodies.

---

## 🎯 Project Goals

The main backend goals of this project are:

* Build a structured REST API
* Improve Node.js and Express.js skills
* Practice TypeScript on the backend
* Work with PostgreSQL
* Learn Prisma ORM
* Design relational database models
* Implement database queries efficiently
* Connect frontend applications to backend APIs
* Improve backend architecture and code organization
* Practice real-world full-stack development

---

## 🔮 Future Improvements

Planned improvements include:

* Expanding REST API endpoints
* Authentication and authorization
* Request validation
* Improved error handling
* API documentation
* Automated testing
* Database optimization
* Improved logging
* Production deployment
* Additional inventory management functionality

---

## 👨‍💻 Author

**Danial Fakhrabadi**

Junior Software Engineer focused on Full-Stack Web Development.

GitHub: [@danial137](https://github.com/danial137)

---

## 📄 License

This project is currently developed as a personal learning and portfolio project.
