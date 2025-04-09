# 🔥 Firebase Chat App

A simple real-time chat application built with **HTML**, **CSS**, **JavaScript**, and **Firebase**. Users can sign in using their Google accounts, send messages, and delete their own messages in real-time.

---

## 🚀 Features

- 🔐 Google Authentication (Firebase Auth)
- 💬 Real-time chat with Firestore
- 🗑️ Delete own messages
- 🎨 Clean UI and responsive design

---



---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Firebase (Auth + Firestore)

---

## 🔧 Setup Instructions

1. Clone the repo or download the code.

2. Create a project in [Firebase Console](https://console.firebase.google.com/)

3. Set up:
   - **Authentication → Google Sign-In**
   - **Firestore Database → Start in test mode (or apply secure rules)**
   - **Project Settings → Web App → Get Firebase config**

4. Replace the Firebase config in `app.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
