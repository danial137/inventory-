# 🖥️ Inventory Management — Client

The frontend application for the Inventory Management System, built with **Next.js, React, TypeScript, Tailwind CSS, Material UI, Redux Toolkit, and Recharts**.

> 🚧 **Status:** Currently under development

---

## ✨ Overview

The Client application provides the user interface for interacting with the Inventory Management System.

The project focuses on building a modern and responsive dashboard experience while practicing real-world frontend concepts such as:

* State management
* API communication
* Data visualization
* Data tables
* Responsive UI
* Component-based architecture
* TypeScript
* Frontend ↔ Backend communication

---

## 🛠️ Tech Stack

### Core

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**

### UI & Components

* **Material UI**
* **MUI X Data Grid**
* **Lucide React**
* **tw-colors**

### State Management

* **Redux Toolkit**
* **React Redux**
* **Redux Persist**

### Data & API

* **Axios**
* **UUID**
* **Numeral**

### Data Visualization

* **Recharts**

### Development Tools

* **ESLint**
* **PostCSS**

---

## 📁 Project Structure

```text
client/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── state/
│   └── ...
├── package.json
├── tsconfig.json
├── next.config.*
├── postcss.config.*
└── README.md
```

> The structure may evolve as the application continues to grow.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/danial137/inventory-.git
```

### 2. Navigate to the client

```bash
cd inventory-/client
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the application using the production build.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase.

---

## 🔗 Backend

The Client communicates with the backend API of the Inventory Management System.

The backend is located in:

```text
/server
```

The backend is built with:

* Node.js
* Express.js
* TypeScript
* Prisma
* PostgreSQL

See the backend documentation:

➡️ [Server README](../server/README.md)

---

## 📊 Data Visualization

The application uses **Recharts** to create data visualizations and dashboard components.

This allows the application to present inventory-related information in a more accessible and visual format.

---

## 📋 Data Tables

The project uses **MUI X Data Grid** for displaying and managing structured data in interactive tables.

---

## 🔐 Environment Variables

If environment variables are required for local development, create a `.env.local` file inside the client directory.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

> Do not commit environment files or sensitive credentials to GitHub.

---

## 🎯 Project Goals

This project is being developed as a practical full-stack application and learning project.

The main frontend goals are:

* Improve Next.js and React skills
* Strengthen TypeScript knowledge
* Practice state management with Redux Toolkit
* Work with REST APIs
* Build reusable UI components
* Create dashboard interfaces
* Work with data tables and charts
* Improve frontend architecture
* Improve communication between frontend and backend

---

## 🔮 Future Improvements

Planned improvements include:

* Additional dashboard functionality
* More inventory management features
* Improved UI/UX
* Additional data visualizations
* Improved error handling
* Better loading and empty states
* Authentication and authorization
* More comprehensive testing
* Production deployment

---

## 👨‍💻 Author

**Danial Fakhrabadi**

Junior Software Engineer focused on Full-Stack Web Development.

GitHub: [@danial137](https://github.com/danial137)

---

## 📄 License

This project is currently developed as a personal learning and portfolio project.
