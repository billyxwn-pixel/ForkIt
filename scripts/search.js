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

// test
function dynamicCards(collection) {
    console.log(queryid);
    if (queryid != null && queryid != "" && queryid != undefined) {
        db.collection(collection).orderBy(queryid).get().then(allRestaurants => createCard(allRestaurants));
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
        let newcard = cardTemplate.content.cloneNode(true);

        
        newcard.querySelector('.texttitle').innerHTML = title;
        newcard.querySelector('.card-text').innerHTML = restkeyword + " Recent Visits: " + details;
        newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
        newcard.querySelector('.card-img').src = "/images/" + RestCode + ".jpg";

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
