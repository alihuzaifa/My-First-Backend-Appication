import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js"
const firebaseConfig = {
    apiKey: "AIzaSyBlf7pUNiKVgGz4de3mcaPS19998JKf88M",
    authDomain: "todo-application-64f3d.firebaseapp.com",
    projectId: "todo-application-64f3d",
    storageBucket: "todo-application-64f3d.appspot.com",
    messagingSenderId: "430019009436",
    appId: "1:430019009436:web:678353cfddcc47c5fac659",
    measurementId: "G-Y7RQXY10X6"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
