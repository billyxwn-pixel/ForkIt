//to pull the query from the local storage
var queryid = localStorage.getItem("query");

//code is for if there is no query whatsoever
// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("restCardTemp");

//     db.collection(collection)
//     .get()
//     .then(allRest => {

//         allRest.forEach(doc => {
//             var title = doc.data().name;
//             var details = doc.data().recent_visit;
//             var RestCode = doc.data().bgImage;
//             var resttime = doc.data().hours.fri;
//             var resthours = resttime.split(" ");
//             var am = resthours[0] + resthours[1];
//             var pm = resthours[2] + resthours[3];
//             var restkeyword = doc.data().keywords;
//             var docID = doc.id;
//             let newcard = cardTemplate.content.cloneNode(true);
            
//             newcard.querySelector('.texttitle').innerHTML = title;
//             newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
//             newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
//             newcard.querySelector('.card-img').src = RestCode;

//             newcard.getElementById("topcard").addEventListener("click", function (event) {
//                 // utilizing local storage to pass restaurant id
//                 // localStorage.setItem("id", docID);
//                 // window.location.href = "./restaurant.html";

//                 // utilizing URL
//                 window.location.href = "./restaurant.html?id=" + docID;
//             });

//             document.getElementById(collection + "-goes-here").appendChild(newcard)
//         })
//     })
// }
// //code for if a query is sent in
// function displayCardsDynamically2(collection){
//     let cardTemplate = document.getElementById("restCardTemp");
//     console.log(queryid)
//     db.collection(collection)
//     .orderBy(queryid)
//     .get()
//     .then(allRest=> {

//         allRest.forEach(doc => {
//             var title = doc.data().name;
//             var details = doc.data().recent_visit;
//             var RestCode = doc.data().bgImage;
//             var resttime = doc.data().hours.fri;
//             var resthours = resttime.split(" ");
//             var am = resthours[0] + resthours[1];
//             var pm = resthours[2] + resthours[3];
//             var restkeyword = doc.data().keywords;
//             var docID = doc.id;
//             let newcard = cardTemplate.content.cloneNode(true);
            
//             newcard.querySelector('.texttitle').innerHTML = title;
//             newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
//             newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
//             newcard.querySelector('.card-img').src = RestCode;

//             document.getElementById(collection + "-goes-here").appendChild(newcard)

//         })
//     })
// }

function dynamicCards(collection) {
    // console.log(queryid);
    if (queryid != null && queryid != "" && queryid != undefined) {
        tmp = queryid.charAt(0).toUpperCase() + queryid.substring(1).toLowerCase();
        let tmpdb;
        db.collection(collection).where('keywords', 'array-contains', tmp).get().then(docsThatContain => {
            // if the get() doesn't return any documents with the keyword, load all
            if (docsThatContain.size == 0) {
                db.collection(collection).get().then(allRestaurants => createCard(allRestaurants));
            } else {
                // if get() returned at least one document, populate first with documents that contain keyword
                // then populate with ones without
                createCard(docsThatContain);
                db.collection(collection).where('keywords', 'not-in', [tmp]).get().then(docs => createCard(docs));
            }
        });
    } else {
        db.collection(collection).get().then(allRestaurants => createCard(allRestaurants));
    }
}
dynamicCards("restaurants");

// driver program

// if (queryid == "Thai"){
// displayCardsDynamically1("restaurant")}
// else {
// displayCardsDynamically2("restaurant")};

////////////////////////////////////////////////////////

function createCard(documentArray) {
    let cardTemplate = document.getElementById("restCardTemp");
    documentArray.forEach(doc => {
        
        const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        let days = day.substring(0, 3);
        
        var title = doc.data().name;
        var details = doc.data().recently_visited;
        var RestCode = doc.data().code;
        var resttime = doc.data().hours[days];
        var resthours = resttime.split(" ");
        var am = resthours[0] + resthours[1];
        var pm = resthours[2] + resthours[3];
        var restkeyword = doc.data().keywords;
        var docID = doc.id;
        var rating = doc.data().stars;
        let newcard = cardTemplate.content.cloneNode(true);

        
        newcard.querySelector('.texttitle').innerHTML = title;
        newcard.querySelector('.card-text').innerHTML = restkeyword + " Recent Visits: " + details;
        newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
        newcard.querySelector('.card-img').src = "/images/" + RestCode + ".jpg";

        setStarDisplay(rating, newcard);

        newcard.getElementById("topcard").addEventListener("click", function (event) {
            // utilizing local storage to pass restaurant id
            // localStorage.setItem("id", docID);
            // window.location.href = "./restaurant.html";

            // utilizing URL
            window.location.href = "./restaurant.html?id=" + docID;
        });

    document.getElementById("restaurant-goes-here").appendChild(newcard)
    })
}

// Function to set the star rating display on the card
function setStarDisplay(num, tmp) {
    var stars = [tmp.querySelector("#star1"), tmp.querySelector("#star2"), tmp.querySelector("#star3"), tmp.querySelector("#star4"), tmp.querySelector("#star5")];

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