// Initialize global variables for use later
// const res = localStorage.getItem("id")               // use local storage to retrieve id
let params = (new URL(document.location)).searchParams; // use URL query to retrieve id
const res_id = params.get("id");

let username = "";
let uid = "";

let res_lat;
let res_long;

// Run these functions on script load
function doAll() {
    getUsername();
    getRestaurantData(res_id);
    getReviews(res_id);
}
doAll();

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

// Function to populate the screen with restaurant data from firebase.
function getRestaurantData(restaurant_id) {

    // Create database object representing collection of restaurants, and iterate
    // through each document until you reach the restaurant that matches the ID
    db.collection("restaurants").get().then(allRestaurants => {
        allRestaurants.forEach(doc => {

            // if ID from document matches ID given from URL/localstorage, pull information
            // and populate the data on the page
            if (doc.id == restaurant_id) {
                var res_name = doc.data().name;
                var res_stars = doc.data().stars;
                var res_keywords = doc.data().keywords;     // array of keywords
                var res_bgimage = doc.data().code;
                var res_phone = doc.data().phone_number;
                var res_email = doc.data().email;
                var res_website = doc.data().website;
                var res_hours = doc.data().hours;           // stored as key/value pairs, 3-character day code
                var res_recent = doc.data().recently_visited;
                res_lat = doc.data().latitude;
                res_long = doc.data().longitude;

                // Change values in top third of layout (restaurant name, background image, stars)
                document.getElementById("restaurant_name").innerHTML = "<b>" + res_name + "</b>";
                if (res_bgimage != null && res_bgimage != "") {
                    document.getElementById("topthird").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(\"./images/" + res_bgimage + ".jpg\")";
                }
                else {      // Use a default image if the restaurant doesn't have an image
                    document.getElementById("topthird").style.backgroundImage = "url(\"../images/default_img.png\")";
                }
                setStarDisplay(res_stars);
                
                // Change values for middle third of layout (keywords, phone, email, website, hours, recent visits)
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
                    // document.getElementById("website").href = "";
                }
                document.getElementById("recent_visit").innerHTML = "" + res_recent + " recent visits";
                
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

                // Event listener for map button, opens up Google Maps using the restaurant's lat/long data.
                document.getElementById("mapbutton").addEventListener("click", () => {
                    window.open("https://www.google.com/maps/@" + res_lat + "," + res_long + ",13z?entry=ttu");
                });
                
                // Put restaurant name in the review form (to display when they want to write a review)
                document.getElementById("review_restaurant").innerHTML = "You are reviewing: " + res_name;
            }
        })
    })
}

// Function for adjusting star display depending on the number passed in.
// 0 = 0 stars
// 0 < n < 1 = 0.5 star
// 1 = 1 star
// etc...
// Second parameter: 0 for restaurant detail, 1 for review
function setStarDisplay(num, tmp = 1) {
    var stars;

    if (tmp != 1) {
        stars = [tmp.querySelector("#star1"), tmp.querySelector("#star2"), tmp.querySelector("#star3"), tmp.querySelector("#star4"), tmp.querySelector("#star5")];
    } else {
        stars = [document.getElementById("star1"), document.getElementById("star2"), document.getElementById("star3"), document.getElementById("star4"), document.getElementById("star5")];
    }
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

// Function for grabbing list of reviews for a restaurant and populating the bottom section of the page with them.
function getReviews(restaurantId) {
    db.collection("fake_restaurant_reviews").orderBy("date", "desc").get().then(allReviews => {
        allReviews.forEach(doc => {

            // Run through review collection and only take reviews for current restaurant
            if (doc.data().restaurant_id == restaurantId) {

                // Retrieve review information from document in collection
                var review_date = doc.data().date.toDate().toDateString();
                var review_text = doc.data().review_description;
                var review_stars = doc.data().stars;
                var review_userid = doc.data().user_id;
                var review_username;

                if (doc.data().edited == true) {
                    review_date += " (e)";
                }
                // Get user's name from the users collection
                db.collection("users").get().then(allUsers => {
                    allUsers.forEach(doc2 => {
                        if (doc2.id === review_userid) {
                            review_username = doc2.data().name;

                            // Create template, populate with info, and insert into page
                            let template = document.getElementById("review_card_template");
                            let newreview = template.content.cloneNode(true);

                            newreview.querySelector(".review_card_name").innerHTML = "<p>" + review_username + "<\/p>";
                            newreview.querySelector(".review_card_date").innerHTML = "<p>" + review_date + "<\/p>";
                            newreview.querySelector(".review_card_text").innerHTML = "<p>" + review_text + "<\/p>";
                            setStarDisplay(review_stars, newreview);

                            // Add edit and delete buttons if the review's user is the current user
                            if (review_userid == uid) {
                                newreview.querySelector(".review_delete").style.display = "block";
                                newreview.querySelector(".delete").addEventListener("click", () => {
                                    let user_confirm = confirm("Do you want to delete your review?");
                                    if (user_confirm) {
                                        db.collection("fake_restaurant_reviews").doc(doc.id).delete().then(() => {
                                            alert("Review deleted!");
                                            window.location.href = "/restaurant.html?id=" + res_id;
                                        });
                                    }
                                });
                                // Open the review tab with the text and stars of the review to edit
                                newreview.querySelector(".edit").addEventListener("click", () => {
                                    openReview();
                                    document.getElementById("submit_button").onclick = () => submitReview(doc.id);
                                    document.getElementById("form_text").value = review_text;
                                    document.getElementById("review_stars").value = review_stars;
                                });
                            }

                            document.getElementById("display_reviews").appendChild(newreview);
                        }
                    });
                });
            }
        });
    });
}

// Function to popup the review form in the write review button's onclick
// Reset values to empty so it doesn't clash with edit functionality
function openReview() {
    document.getElementById("review_form").style.display = "block";
    document.getElementById("form_text").value = "";
    document.getElementById("review_stars").value = 0;
    document.getElementById("submit_button").onclick = () => submitReview();
}

// Close the review form if black background is clicked
window.onclick = function (event) {
    // Included code from the skeleton to avoid overwriting the function
    var review_form = document.getElementById("review_form");
    var clickOutPopup = document.getElementById("morePopup");
    if (event.target == clickOutPopup) {
        clickOutPopup.style.display = "none";
    }
    if (event.target == review_form) {
        review_form.style.display = "none";
    }
}

// Event listener for the background div after opening the review form, to close the form.
// document.getElementById("review_form").addEventListener("click", function (e) {
//     document.getElementById("review_form").style.display = "none";
// });

// Function for the onclick used in the review form to close the button
function closeForm() {
    document.getElementById("review_form").style.display = "none";
}

// Event listener for the back button, user goes to previous page (whether it was search or home)
document.getElementById("backbutton").addEventListener("click", function (event) {
    history.back();
});

// Event listener for submit button
function submitReview(inputDoc = null) {
    var review_text = document.getElementById("form_text").value;

    // Make sure the review is not empty or only whitespace
    if (review_text.trim() == "") {
        alert("You can't have an empty review!");
        document.getElementById("form_text").value = "";
        return;
    }
    
    var user = username;
    var userid = uid;
    var stars = document.getElementById("review_stars").value;

    // Make sure the user gives a star rating before submission
    if (stars == 0) {
        alert("You need to give a rating!");
        return;
    }

    // Timestamp the review, make a new document in the review collection.
    // Fails if the user is not signed in.
    var currentTime = firebase.firestore.Timestamp.fromDate(new Date());
    if (user) {
        // If a document id is passed in, user is editing review
        if (inputDoc != null) {
            db.collection("fake_restaurant_reviews").doc(inputDoc).get().then(reviewDoc => {
                if (reviewDoc.data().review_description != review_text || reviewDoc.data().stars != stars) {
                    db.collection("fake_restaurant_reviews").doc(inputDoc).set({
                        // "username": user,
                        "user_id": userid,
                        "restaurant_id": res_id,
                        "review_description": review_text,
                        "date": currentTime,
                        "stars": document.getElementById("review_stars").value,
                        "edited": true
                    }).then(() => {
                        alert("Review was successfully edited!");
                        window.location.href = "/restaurant.html?id=" + res_id;
                    });
                }
                else {
                    alert("You didn't edit your review!");
                }
            });
        }
        // If a document id is not passed in, normal review submission
        else {
            db.collection("fake_restaurant_reviews").add({
                // "username": user,
                "user_id": userid,
                "restaurant_id": res_id,
                "review_description": review_text,
                "date": currentTime,
                "stars": document.getElementById("review_stars").value
            }).then(() => {
                alert("Review has been submitted!");
                window.location.href = "/restaurant.html?id=" + res_id;
            });
        }
    }
    else {
        alert("You are not signed in!");
        window.location.href = "/restaurant.html?id=" + res_id;
    } 
};
