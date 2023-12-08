// Set a few global variables
var AllPosts = [];
var PostIndex = 0;
var user1 = localStorage.getItem("user");       // Grab the user id if user is logged in

// Do all function to run everything required for index.html
function doAll() {
    addNextListener();
    addPreviousListener();
    readAllPosts();
    if (user1 != null) {
        displayUserName();          // Display a username on index page if a user is logged in
    } 
}

// Add functionality to the next and previous buttons on the index page
function addNextListener() {
    document.getElementById("Next").addEventListener('click', () => {
        if (PostIndex <= 5) {
            displayPostCard(AllPosts[PostIndex]);
            PostIndex++;
        } else {
            PostIndex = 0;
            displayPostCard(AllPosts[PostIndex])
        }
    });
}

function addPreviousListener() {
    document.getElementById("Previous").addEventListener('click', () => {
        if (PostIndex >= 0) {
            displayPostCard(AllPosts[PostIndex]);
            PostIndex--;
        } else {
            PostIndex = 5;
            displayPostCard(AllPosts[PostIndex])
        }
    });
}

// Function to access the collection of reviews in firebase and push them into an array to prepare
// for the displayPostCard function
function readAllPosts() {
    db.collection("fake_restaurant_reviews").get().then(snap => {
        // console.log(snap.size);      // Returns size of collection
        MaxPost = snap.size;            // How many posts we have in total
        PostIndex = 0;                  // Start displaying the one at index 0
        snap.forEach(doc => {
            AllPosts.push(doc.data());  // Add to array with 'push'
        })
        displayPostCard(AllPosts[0]);   // Display the first post at the beginning
    });
}

// Function to display a single review card on the main page, drawn from an array passed in from readAllPosts
function displayPostCard(doc) {
    var title = doc.restaurant_name; 
    var desc = doc.review_description;
    var useid = doc.user_id;
    
    db.collection("users").doc(useid).get().then( doc => {
        // Create a template card and load with data
        var users = doc.data().name;
        var newcard = document.getElementById("reviewCardTemp").content.cloneNode(true);
        newcard.querySelector('#author').innerHTML = users;
        newcard.querySelector('.RestTitle').innerHTML = title;
        newcard.querySelector('.Description').innerHTML = desc;
        
        // Remove any old cards and add the new one
        const element = document.getElementById("reviews");
        element.innerHTML = "";
        element.append(newcard);
    });
}

// Function to place the username into the welcome message
function displayUserName() {
    db.collection("users").doc(user1).get().then( doc => {
        var name = doc.data().name;
        document.getElementById("user").innerHTML = name;
    });
}
