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

---

## Download Docker Image
1. [Click here to download chat-app.tar](https://drive.google.com/file/d/14ECG126RYLMhwofyubKCeiqadVt0QmmQ/view?usp=sharing)
2. Open terminal and run:
   docker load -i chat-app.tar
3. Then start the app:
   docker run -p 8080:80 chat-app
4. Open browser and go to: http://localhost:8080

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

'''js

