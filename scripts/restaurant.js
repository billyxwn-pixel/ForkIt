// onload = () => {

// }

function getRestaurantData(restaurant_id) {

    // document.getElementById("topthird").style = 
    // Create database object representing collection of restaurants, and iterate
    // through each document until you reach the restaurant that matches the ID
    db.collection("restaurants").get().then(allRestaurants => {
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
                var res_address = doc.data().address;   // reminder: need to add to document
                var res_zipcode = doc.data().zipcode;
                var res_hours = doc.data().hours;       // stored as key/value pairs (dictionary), 3-character day code
                var res_reviews = doc.data().reviews;   // reminder: test later

                // Change values in top third of layout
                document.getElementById("restaurant_name").innerHTML = "<b>" + res_name + "</b>";
                if (res_bgimage != null && res_bgimage != "") {
                    document.getElementById("topthird").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(" + res_bgimage + ")";
                }
                
                
            }
        })
    })
}

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

function getReviews(restaurant_id) {

}

function testBG() {
    var testURL = "https://www.chewboom.com/wp-content/uploads/2021/10/Churchs-Chicken-Launches-New-Texas-Cut-Bacon-Chicken-Sandwiches-678x381.jpg";
    document.getElementById("topthird").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(" + testURL + ")";
}
testBG();

// //------------------------------------------------------------------------------
// // Input parameter is a string representing the collection we are reading from
// //------------------------------------------------------------------------------
// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("hikeCardTemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

//     db.collection(collection).get()   //the collection called "hikes"
//         .then(allHikes=> {
//             //var i = 1;  //Optional: if you want to have a unique ID for each hike
//             allHikes.forEach(doc => { //iterate thru each doc
//                 var docID = doc.id;
//                 var title = doc.data().name;       // get value of the "name" key
//                 var details = doc.data().details;  // get value of the "details" key
// 								var hikeCode = doc.data().code;    //get unique ID to each hike to be used for fetching right image
//                 var hikeLength = doc.data().length; //gets the length field
//                 let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

//                 //update title and text and image
//                 newcard.querySelector('.card-title').innerHTML = title;
//                 newcard.querySelector('.card-length').innerHTML = hikeLength +"km";
//                 newcard.querySelector('.card-text').innerHTML = details;
//                 newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg

//                 newcard.querySelector('a').href = "eachHike.html?docID="+docID;

//                 //Optional: give unique ids to all elements for future use
//                 // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
//                 // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
//                 // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

//                 //attach to gallery, Example: "hikes-go-here"
//                 document.getElementById(collection + "-go-here").appendChild(newcard);

//                 //i++;   //Optional: iterate variable to serve as unique ID
//             })
//         })
// }

// displayCardsDynamically("hikes");  //input param is the name of the collection