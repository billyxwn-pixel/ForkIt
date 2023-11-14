function writeRestaurants() {
    //define a variable for the collection you want to create in Firestore to populate data
    var restaurantTempData = db.collection("restaurants");

    // keywords still need to be added

    restaurantTempData.add({
        code: "CAFE1",
        name: "Cafe One",
        hours: {
            "mon": "9:00 AM 10:00 PM",
            "tue": "9:00 AM 10:00 PM",
            "wed": "9:00 AM 10:00 PM",
            "thu": "9:00 AM 10:00 PM",
            "fri": "9:00 AM 10:00 PM",
            "sat": "10:00 AM 5:00 PM",
            "sun": "10:00 AM 5:00 PM"
        },
        // location: new firebase.firestore.GeoPoint(49.3128901, -126.71284),
        //https://firebase.google.com/docs/reference/kotlin/com/google/firebase/firestore/GeoPoint
        latitude: 49.3128901,
        longitude: -126.71284,
        keywords: ["Cafe", "Coffee", "Pastry"],
        recently_visited: 347,
        details: "Experience artisanal coffee and delectable"
            + " pastries at Cafe One. Join us in our cozy, artsy space!",
        stars: 4.0,
        email: "Cafe1_Official@yahoo.com",
        phone_number: "(250) 555-0199",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "CAFE2",
        name: "Cafe Two",
        hours: {
            "mon": "9:00 AM 10:00 PM",
            "tue": "9:00 AM 10:00 PM",
            "wed": "9:00 AM 10:00 PM",
            "thu": "9:00 AM 10:00 PM",
            "fri": "9:00 AM 10:00 PM",
            "sat": "10:00 AM 10:00 PM",
            "sun": "10:00 AM 10:00 PM"
        },
        latitude: 50.312811,
        longitude: -127.71884,
        keywords: ["Cafe", "Coffee", "Aesthetic"],
        recently_visited: 53,
        details: "Dine or enjoy a cup of coffe with us at Cafe Two."
            + " Enjoy fresh-grown coffee in a quiet environment.",
        stars: 4.3,
        email: "Cafe2_Official@yahoo.com",
        phone_number: "(250) 756-0859",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "FF1",
        name: "FastFood One",
        hours: {
            "mon": "9:00 AM 8:00 PM",
            "tue": "9:00 AM 8:00 PM",
            "wed": "9:00 AM 8:00 PM",
            "thu": "9:00 AM 8:00 PM",
            "fri": "9:00 AM 8:00 PM",
            "sat": "9:00 AM 8:00 PM",
            "sun": "9:00 AM 8:00 PM"
        },
        latitude: 51.2884511,
        longitude: -128.8123124,
        keywords: ["Fastfood", "Taco", "Mexican"],
        recently_visited: 1012,
        details: "Satisfy your taco cravings at FastFood Two! Fast,"
            + " flavorful, and full of options, it's the go-to"
            + " spot for Mexican-inspired fast food.",
        stars: 3.7,
        email: "FastFood1_Official@yahoo.com",
        phone_number: "(250) 748-7823",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "FF2",
        name: "FastFood Two",
        hours: {
            "mon": "12:00 AM 12:00 AM",
            "tue": "12:00 AM 12:00 AM",
            "wed": "12:00 AM 12:00 AM",
            "thu": "12:00 AM 12:00 AM",
            "fri": "12:00 AM 12:00 AM",
            "sat": "9:00 AM 9:00 PM",
            "sun": "9:00 AM 9:00 PM"
        },
        latitude: 48.3128901,
        longitude: -125.684584,
        keywords: ["Fastfood", "Burger", "Fries"],
        recently_visited: 842,
        details: "Craving a quick, delicious burger? Visit FastFood One,"
            + " where juicy burgers, crispy fries, and"
            + " friendly service await!",
        stars: 4.0,
        email: "FastFood2_Official@yahoo.com",
        phone_number: "(890) 123-4567",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "FR1",
        name: "FancyRestaurant 1",
        hours: {
            "mon": "11:00 PM 11:00 PM",
            "tue": "11:00 PM 11:00 PM",
            "wed": "11:00 PM 11:00 PM",
            "thu": "11:00 PM 11:00 PM",
            "fri": "11:00 PM 11:00 PM",
            "sat": "11:00 PM 11:00 PM",
            "sun": "11:00 PM 11:00 PM"
        },
        latitude: 55.78511,
        longitude: -137.182184,
        keywords: ["Fancy", "Fine Dining", "Elegant"],
        recently_visited: 512,
        details: "Indulge in the epitome of fine dining at FancyRestaurant 1."
            + " A symphony of flavors and elegance"
            + "in every dish awaits you here.",
        stars: 4.5,
        email: "FancyRestaurant1_Official@yahoo.com",
        phone_number: "(234) 567-8901",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "FR2",
        name: "FancyRestaurant 2",
        hours: {
            "mon": "11:00 PM 10:00 PM",
            "tue": "11:00 PM 10:00 PM",
            "wed": "11:00 PM 10:00 PM",
            "thu": "11:00 PM 10:00 PM",
            "fri": "11:00 PM 10:00 PM",
            "sat": "11:00 PM 10:00 PM",
            "sun": "11:00 PM 10:00 PM"
        },
        latitude: 58.5815219,
        longitude: -147.18123894,
        keywords: ["Fancy", "Luxurious", "Exquisite"],
        recently_visited: 512,
        details: "Experience culinary perfection at FancyRestaurant 2."
            + " Exquisite dishes, impeccable service, and a luxurious"
            + " ambiance will meet you in this fine dining experience.",
        stars: 3.9,
        email: "FancyRestaurant2_Official@yahoo.com",
        phone_number: "(345) 678-9012",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
}

function writeRestaurantsReviews() {
    //define a variable for the collection you want to create in Firestore to populate data
    var restaurantReviewData = db.collection("buzz_reviews");

    // keywords still need to be added

    restaurantReviewData.add({
        code: "BUZZ_1",
        name: "Seoul Eats",
        hours: "succulent, perfectly grilled, and bursting with flavor. "
            + "The delightful blend of savory and sweet notes made every bite "
            + "an absolute delight, making it a must-visit for anyone craving "
            + "an unforgettable culinary experience."
    });

    restaurantReviewData.add({
        code: "BUZZ_2",
        name: "Ramen Haven",
        hours: "The ramen at Noodle Haven is simply extraordinary, with rich "
            + "broth and perfectly textured noodles, creating an unparalleled "
            + "dining experience."
    });
}

//Set a few global variables
var AllPosts = [];
var MaxPosts = 0;  //will get reassigned to say, 10
var PostIndex = 0;

//Next button event listener
function addNextListener() {
    // var index = MaxPost-PostIndex;
    document.getElementById("buzz").addEventListener('click', () => {
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

function readAllPosts() {
    db.collection("buzz_reviews")
        .get()
        .then(snap => {
            console.log(snap.size);  // returns size of collection
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
    var title = doc.name; // get value of the "name" key
    var desc = doc.review; //gets the length field
    var image = doc.image; //the field that contains the URL 

    //clone the new card
    let newcard = document.getElementById("reviewCardTemp").content.cloneNode(true);

    //populate with title, image
    newcard.querySelector('.RestTitle').innerHTML = title;
    newcard.querySelector('.Description').innerHTML = desc;

    //remove any old cards
    const element = document.getElementById("posts-go-here");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    //add the new card (overwrites any old ones from before)
    element.append(newcard);
}