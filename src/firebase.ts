import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtWMFvJZmt1e4TgfLRejFyiRYeyUcUfcs",
    authDomain: "wedding-be-d70d6.firebaseapp.com",
    projectId: "wedding-be-d70d6",
    storageBucket: "wedding-be-d70d6.appspot.com",
    messagingSenderId: "623953607664",
    appId: "1:623953607664:web:8c21c5a09807672aa1fb35",
    measurementId: "G-4CJBTGSDLS"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
export const analytics = getAnalytics(firebaseApp);

