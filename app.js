import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userInfo = document.getElementById("user-info");


loginBtn.addEventListener("click", async () => {
    signInWithPopup(auth, provider).catch(error => console.error("Error signing in:", error));
});


logoutBtn.addEventListener("click", () => {
    signOut(auth).catch(error => console.error("Error signing out:", error));
});


onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo.textContent = `Logged in as: ${user.displayName}`;
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline";
        messageInput.disabled = false;
        sendBtn.disabled = false;
    } else {
        userInfo.textContent = "Not logged in";
        loginBtn.style.display = "inline";
        logoutBtn.style.display = "none";
        messageInput.disabled = true;
        sendBtn.disabled = true;
    }
});


sendBtn.addEventListener("click", async () => {
    const message = messageInput.value.trim();
    if (message && auth.currentUser) {
        await addDoc(collection(db, "messages"), {
            text: message,
            timestamp: new Date(),
            user: auth.currentUser.displayName
        });
        messageInput.value = "";
    }
});
async function deleteMessage(messageId) {
    if (confirm("Are you sure you want to delete this message?")) {
        await deleteDoc(doc(db, "messages", messageId));
    }
}
const q = query(collection(db, "messages"), orderBy("timestamp"));
onSnapshot(q, (snapshot) => {
    chatBox.innerHTML = ""; 
    snapshot.forEach((doc) => {
        const docData = doc.data();
        const docId = doc.id; 
        const formattedTime = docData.timestamp?.toDate().toLocaleString();
        const isCurrentUser = auth.currentUser && docData.user === auth.currentUser.displayName;
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.setAttribute("data-id", docId);
        messageElement.classList.add(isCurrentUser ? "user" : "other");
        messageElement.innerHTML = `
            <strong>${docData.user}</strong>: ${docData.text} 
            <span class="timestamp">${formattedTime}</span>
            ${isCurrentUser ? `<button class="delete-btn" data-id="${docId}">🗑</button>` : ""}
        `;

        chatBox.appendChild(messageElement);
    });
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const messageId = this.getAttribute("data-id");
            deleteMessage(messageId);
        });
    });

    chatBox.scrollTop = chatBox.scrollHeight;
});
