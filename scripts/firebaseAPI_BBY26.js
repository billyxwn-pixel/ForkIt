//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {

    apiKey: "AIzaSyBgcOVFb3oQdFJVbJB96yBV-cs-bQmKriw",
    authDomain: "comp1800-bby26-994ce.firebaseapp.com",
    projectId: "comp1800-bby26-994ce",
    storageBucket: "comp1800-bby26-994ce.appspot.com",
    messagingSenderId: "215520092883",
    appId: "1:215520092883:web:40898f56f802d072252a26"
};

//--------------------------------------------
// initialize the Firebase app that's above
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); //creates a new database for us, "db"