

//Set a few global variables
var AllPosts = [];
var PostIndex = 0;

//Next button event listener
function addNextListener() {
   
    document.getElementById("Next").addEventListener('click', () => {
        if (PostIndex <= 5) {
            displayPostCard(AllPosts[PostIndex]);
            PostIndex++;
        } else {
            PostIndex = 0;
            displayPostCard(AllPosts[PostIndex])
        }
    })
}
addNextListener();

//Adds Previous Button Listener
function addPreviousListener() {
   
    document.getElementById("Previous").addEventListener('click', () => {
        if (PostIndex >= 0) {
            displayPostCard(AllPosts[PostIndex]);
            PostIndex--;
        } else {
            PostIndex = 5;
            displayPostCard(AllPosts[PostIndex])
        }
    })
}
addPreviousListener();

function readAllPosts() {
    db.collection("fake_restaurant_reviews")
        .get()
        .then(snap => {
            // console.log(snap.size);  // returns size of collection
            MaxPost = snap.size;     // how many posts we have in total
            PostIndex = 0;           // start displaying the one at index 0
            snap.forEach(doc => {
                AllPosts.push(doc.data());  //add to array with 'push'
            })
            displayPostCard(AllPosts[0]);   //display the first post at the beginning
        })
}
readAllPosts();

//------------------------------------------------------------
// this function displays ONE card, with information
// from the post document extracted (name, description, image)
//------------------------------------------------------------
function displayPostCard(doc) {
    var title = doc.restaurant_name; 
    var desc = doc.review_description;
    var useid = doc.user_id;
    
    db.collection("users").doc(useid).get().then( doc => {
        var users = doc.data().name;
        var newcard = document.getElementById("reviewCardTemp").content.cloneNode(true);
        newcard.querySelector('#author').innerHTML = users;
        newcard.querySelector('.RestTitle').innerHTML = title;
        newcard.querySelector('.Description').innerHTML = desc;
        
    
        //remove any old cards
        const element = document.getElementById("reviews");
        element.innerHTML = "";
    
        //add the new card (overwrites any old ones from before)
        element.append(newcard);
    })
}

// var for grabbing user ID if logged in
var user1 = localStorage.getItem("user");

//places the username into the welcome message
function displayUserName(){
    db.collection("users").doc(user1).get().then( doc => {
        var name = doc.data().name;
        document.getElementById("user").innerHTML = name;
} )
}

//doesnt run if the userID doesnt exist.
if (user1 != null){
    displayUserName();
} 
