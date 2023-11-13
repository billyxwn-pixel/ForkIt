// get restaurant id
// const res = localStorage.getItem("id")               // use local storage to retrieve id
let params = (new URL(document.location)).searchParams; // use URL query to retrieve id
const res_id = params.get("id");

let username = "";
let uid = "";
// Get the user's name and ID from database. Store them in the above variables for later use.
function getUsername() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            uid = user.uid;
            username = user.displayName;
            document.getElementById("review_hello").innerHTML = "Hello, " + username + "!";
        }
    });
}
getUsername();

// Populate the screen with restaurant data from firebase.
function getRestaurantData(restaurant_id) {

    // document.getElementById("topthird").style = 
    // Create database object representing collection of restaurants, and iterate
    // through each document until you reach the restaurant that matches the ID
    db.collection("restaurant").get().then(allRestaurants => {
        allRestaurants.forEach(doc => {

            // if ID from document matches ID given from URL/localstorage, pull information
            // and populate the data on the page
            if (doc.id == restaurant_id) {

                // data to pull:
                // restaurant name, stars, keywords, bgimage, phone, email, website,
                // address, zipcode, hours (key/value pairs), reviews
                var res_name = doc.data().name;
                var res_stars = doc.data().stars;
                var res_keywords = doc.data().keywords; // array of keywords
                var res_bgimage = doc.data().bgImage;   // url link to img in str format
                var res_phone = doc.data().phone;
                var res_email = doc.data().email;       // reminder: this is to test for no-email cases
                var res_website = doc.data().website;   // reminder: test some places that don't have websites
                // var res_address = doc.data().address;
                // var res_zipcode = doc.data().zipcode;
                var res_hours = doc.data().hours;       // stored as key/value pairs (dictionary), 3-character day code
                // var res_reviews = doc.data().reviews;   // reminder: test later

                // Change values in top third of layout (restaurant name, background image, stars)
                document.getElementById("restaurant_name").innerHTML = "<b>" + res_name + "</b>";
                if (res_bgimage != null && res_bgimage != "") {
                    // use first line for URL, second line for image code to pull from image folder
                    document.getElementById("topthird").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(" + res_bgimage + ")";
                    // document.getElementById("topthird").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(\"./images/" + res_bgimage + ".png\")";
                }
                setStarDisplay(res_stars);
                
                // Change values for middle third of layout (keywords, phone, email, website, hours)
                if (res_keywords.length != 0) {
                    let str = "Categories: ";
                    for (let x = 0; x < res_keywords.length; x++) {
                        str += res_keywords[x];
                        if (x < res_keywords.length - 1) str += ", ";
                    }
                    document.getElementById("keywords").innerHTML = str;
                }
                if (res_phone != null && res_phone != "") {
                    document.getElementById("phonenumber").innerHTML = res_phone;
                }
                if (res_email != undefined && res_email != "" && res_email != null) {
                    document.getElementById("email").innerHTML = res_email;
                }
                if (res_website != undefined && res_website != "" && res_website != null) {
                    document.getElementById("website").innerHTML = res_website;
                }
                
                let hours = {
                    "mon": res_hours.mon,
                    "tue": res_hours.tue,
                    "wed": res_hours.wed,
                    "thu": res_hours.thu,
                    "fri": res_hours.fri,
                    "sat": res_hours.sat,
                    "sun": res_hours.sun
                };
                for (let x = 0; x < Object.keys(hours).length; x++) {
                    let str = Object.values(hours)[x].split(" ");
                    const newstr = str[0] + " " + str[1] + " - " + str[2] + " " + str[3];
                    // console.log(Object.keys(hours)[x] + " " + str);
                    document.getElementById(Object.keys(hours)[x]).innerHTML = newstr;
                }
                
                // Put restaurant name in the review form
                document.getElementById("review_restaurant").innerHTML = "You are reviewing: " + res_name;
            }
        })
    })
}
getRestaurantData(res_id);

// Function for adjusting star display depending on the number passed in.
// 0 = 0 stars
// 0 < n < 1 = 0.5 star
// 1 = 1 star
// etc...
function setStarDisplay(num) {
    const stars = [document.getElementById("star1"), document.getElementById("star2"), document.getElementById("star3"), document.getElementById("star4"), document.getElementById("star5")];
    for (let i = 0; i < stars.length; i++) {
        if (i <= Math.floor(num) - 1) {
            stars[i].classList.add("star");
            stars[i].style.display = "inline-block";
        } else if (num - Math.floor(num) > 0) {
            stars[i].classList.add("half_star");
            stars[i].style.display = "inline-block";
            break;
        }
    }
}
// test the function by running it
// setStarDisplay(3.4);

// CURRENTLY UNDEFINED
// Function for grabbing list of reviews for a restaurant and populating the bottom section of the page with them.
function getReviews(restaurant_id) {
    
}

// Function to popup the review form
function openReview() {
    document.getElementById("review_form").style.display = "block";
}

// Close the review form if black background is clicked
window.onclick = function (event) {
    var review_form = document.getElementById("review_form");
    if (event.target == review_form) {
        review_form.style.display = "none";
    }
}

// Event listener for the back button
document.getElementById("backbutton").addEventListener("click", function (event) {
    history.back();
});

// Event listeners for review form -> stars to light up depending on click or hover

// Event listener for submit button
function submitReview() {
    var review_text = document.getElementById("form_text").value;
    if (review_text.trim() == "") {
        alert("You can't have an empty review!");
        document.getElementById("form_text").value = "";
        return;
    }
    // insert line to store stars
    var user = username;
    var userid = uid;

    if(user) {
        db.collection("reviews").add({
            "username": user,
            "user_id": userid,
            "restaurant_id": res_id,
            "review_text": review_text
            // "stars": variable that stored stars
        }).then(() => {
            alert("Review has been submitted!");
            window.location.href = "/restaurant.html?id=" + res_id;
        });
    }
    else {
        alert("You are not signed in!");
        window.location.href = "/restaurant.html?id=" + res_id;
    } 
};
