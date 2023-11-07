function writeRestaurants() {
    //define a variable for the collection you want to create in Firestore to populate data
    var restaurantTempData = db.collection("restaurants");

    // keywords still need to be added

    restaurantTempData.add({
        code: "CAFE1",
        name: "Cafe One",
        hours: {
            "mon": "9 AM 10 PM",
            "tue": "9 AM 10 PM",
            "wed": "9 AM 10 PM",
            "thu": "9 AM 10 PM",
            "fri": "9 AM 10 PM",
            "sat": "10 AM 5 PM",
            "sun": "10 AM 5 PM"
        },
        // location: new firebase.firestore.GeoPoint(49.3128901, -126.71284),
        //https://firebase.google.com/docs/reference/kotlin/com/google/firebase/firestore/GeoPoint
        latitude: 49.3128901,
        longitude: -126.71284,
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
             "mon": "9 AM 10 PM" ,
             "tue": "9 AM 10 PM" ,
             "wed": "9 AM 10 PM" ,
             "thu": "9 AM 10 PM" ,
             "fri": "9 AM 10 PM" ,
             "sat": "10 AM 10 PM" ,
             "sun": "10 AM 10 PM" 
        },
        latitude: 50.312811,
        longitude: -127.71884,
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
             "mon": "9 AM 8 PM" ,
             "tue": "9 AM 8 PM" ,
             "wed": "9 AM 8 PM" ,
             "thu": "9 AM 8 PM" ,
             "fri": "9 AM 8 PM" ,
             "sat": "9 AM 8 PM" ,
             "sun": "9 AM 8 PM" 
        },
        latitude: 51.2884511,
        longitude: -128.8123124,
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
             "mon": "12 AM 12 AM" ,
             "tue": "12 AM 12 AM" ,
             "wed": "12 AM 12 AM" ,
             "thu": "12 AM 12 AM" ,
             "fri": "12 AM 12 AM" ,
             "sat": "9 AM 9 PM" ,
             "sun": "9 AM 9 PM" 
        },
        latitude: 48.3128901,
        longitude: -125.684584,
        recently_visited: 842,
        details: "Craving a quick, delicious burger? Visit FastFood One,"
        + " where juicy burgers, crispy fries, and"
        + " friendly service await!" , 
        stars: 4.0,
        email: "FastFood2_Official@yahoo.com",
        phone_number: "(890) 123-4567",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    restaurantTempData.add({
        code: "FR1",
        name: "FancyRestaurant 1",
        hours: {
             "mon": "12 PM 11 PM" ,
             "tue": "12 PM 11 PM" ,
             "wed": "12 PM 11 PM" ,
             "thu": "12 PM 11 PM" ,
             "fri": "12 PM 11 PM" ,
             "sat": "12 PM 11 PM" ,
             "sun": "12 PM 11 PM" 
        },
        latitude: 55.78511,
        longitude: -137.182184,
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
             "mon": "12 PM 10 PM" ,
             "tue": "12 PM 10 PM" ,
             "wed": "12 PM 10 PM" ,
             "thu": "12 PM 10 PM" ,
             "fri": "12 PM 10 PM" ,
             "sat": "12 PM 10 PM" ,
             "sun": "12 PM 10 PM" 
        },
        latitude: 58.5815219,
        longitude: -147.18123894,
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

