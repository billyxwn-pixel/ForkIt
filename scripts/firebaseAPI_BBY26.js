// Our Firebase/Firestore configuration
var firebaseConfig = {

    apiKey: "AIzaSyBgcOVFb3oQdFJVbJB96yBV-cs-bQmKriw",
    authDomain: "comp1800-bby26-994ce.firebaseapp.com",
    projectId: "comp1800-bby26-994ce",
    storageBucket: "comp1800-bby26-994ce.appspot.com",
    messagingSenderId: "215520092883",
    appId: "1:215520092883:web:40898f56f802d072252a26"
};

// initialize Firebase app using details above, and the Firestore database
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); //creates a new database for us, "db"