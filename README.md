# 🚀 Real-Time Task Manager (React Native + Expo + Convex)

This project is a **full-stack, real-time mobile task manager** built using **React Native and Expo** with a live backend powered by **Convex**.

Unlike a simple UI demo, this app includes real-time synchronization, persistent data, and works on both Android and iOS devices.

---

## 📱 Features

### 📝 Tasks

* ➕ Add new tasks
* ✅ Mark tasks as completed / uncompleted
* 📝 Edit existing tasks
* 🗑️ Delete tasks
* 📊 Live progress tracking

### ⚙️ Settings

* 📈 Task statistics (total, completed, remaining)
* 🌙 Dark mode toggle
* 🔔 Notification toggle (UI only)
* 🔄 Auto-sync toggle (UI only)
* 🚨 Delete all tasks option

### 🔄 Real-Time Sync

All updates instantly sync across devices using the Convex real-time database.

---

## 🧠 Tech Stack

* **React Native**
* **Expo**
* **React Navigation**
* **Convex (Realtime Backend)**
* **JavaScript**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

1. Create a `.env`.local file in the project root:

```
CONVEX_DEPLOYMENT=your_convex_deployment
EXPO_PUBLIC_CONVEX_URL=your_convex_url
```

You can get these values from your Convex dashboard.

---

### 4️⃣ Run Convex backend

Open a second terminal:

```bash
npx convex dev
```

---

### 5️⃣ Start the app

```bash
npx expo start
```

Run on:

* Android emulator
* iOS simulator
* Physical device (Expo Go)

---

## 🎯 What This Project Demonstrates

* Building mobile apps with React Native + Expo
* Real-time data synchronization
* Full CRUD operations
* Navigation using tabs & stacks
* Dark mode implementation
* State management and UI interaction
* Full-stack mobile architecture without native code

---

## 📸 Screenshots

(Add screenshots here later)

---

## 👨‍💻 Author

Built as a learning project to practice full-stack mobile development with real-time features.

---
