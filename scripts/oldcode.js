//---------------------------------------------------------
// Throwaway code used to hard-code placeholder data for
// testing purposes.
//---------------------------------------------------------

// Create a collection of placeholder restaurants to test retrieving and display data
function writeRestaurants() {
    // Reference the collection, then add the documents
    var restaurantTempData = db.collection("restaurants");

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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    restaurantTempData.add({
        code: "FR1",
        name: "FancyRestaurant One",
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    restaurantTempData.add({
        code: "FR2",
        name: "FancyRestaurant Two",
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Create a collection of placeholder reviews to test retrieving and displaying.
// The collection will eventually populate with other reviews as the review function as implemented
// and tested.
function writeRestaurantsReviews() {
    var restaurantReviews = db.collection("fake_restaurant_reviews");

    /* Each document includes values for:
    *  Restaurant ID
    *  User ID
    *  Restaurant Name
    *  Star Rating
    *  Review Description
    *  Date the review was made 
    */

    // Reviews by sadkfa sadfasdf: One for each restaurant
    restaurantReviews.add({
        restaurant_id: "raGIfwmgkRvA0a99VwzN",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "Cafe One",
        stars: 4,
        review_description: "Enjoyed the artisanal coffee and the cozy, artsy ambiance. Pastries were delicious!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "gpBIHouQPi7KaKcN1HBk",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "Cafe Two",
        stars: 3,
        review_description: "Nice place for a quiet coffee."
        + " The environment was peaceful, but the coffee was average.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "f0EMav5d0nKhCwS2ctUP",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "FastFood One",
        stars: 4,
        review_description: "Tacos were delicious and varied." 
        + " A great spot for satisfying those Mexican food cravings!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "FJYehiJEPRQ3YZUvphox",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "FastFood Two",
        stars: 3,
        review_description: "Burger was good, fries were crispy."
        + " Service was quick, but nothing exceptional.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "psa29DnAU1seNOLFjpEg",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "FancyRestaurant One",
        stars: 5,
        review_description: "Absolutely exquisite dining experience."
        + " Flavors were a symphony, and the ambiance was divine!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "UynCiVyFhDTvwtqd5Zmf",
        user_id: "CqtUuBRMENM9GU60M5TWrgPSZIJ2",
        restaurant_name: "FancyRestaurant Two",
        stars: 4,
        review_description: "Culinary perfection indeed! The service"
        + " and ambiance were luxurious, and the dishes were delightful.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    
    //Reviews by Yes No: One for each restaurant
    restaurantReviews.add({
        restaurant_id: "raGIfwmgkRvA0a99VwzN",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "Cafe One",
        stars: 4,
        review_description: "Immersed in the artsy aura, the coffee was a"
        + " delight complemented by scrumptious pastries—a cozy" 
        + " haven for coffee enthusiasts!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "gpBIHouQPi7KaKcN1HBk",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "Cafe Two",
        stars: 3,
        review_description: "Tranquil and serene, but the coffee lacked"
        + " the expected punch. A calming spot, yet the taste fell short.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "f0EMav5d0nKhCwS2ctUP",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "FastFood One",
        stars: 4,
        review_description: "Satisfactory, but limited variety in offerings."
        + "Tasty tacos, yet more options would elevate the experience.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "FJYehiJEPRQ3YZUvphox",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "FastFood Two",
        stars: 4,
        review_description: "The burger was passable, fries were average."
        + "Service lacked warmth and efficiency,"
        + " leaving a mediocre dining experience.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "psa29DnAU1seNOLFjpEg",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "FancyRestaurant One",
        stars: 5,
        review_description: "An orchestration of exquisite flavors in"
        + " every dish, harmonized with flawless service and a luxurious"
        + " ambiance. A must-see in fine dining!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "UynCiVyFhDTvwtqd5Zmf",
        user_id: "lmqWxhnl4eWl0ovU3rmDw7hvH7p1",
        restaurant_name: "FancyRestaurant Two",
        stars: 3,
        review_description: "A refined dining experience with room for"
        + " improvement in service. The ambience, however, exuded"
        + " a charming allure.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //Reviews by Noob M: One for each restaurant
    restaurantReviews.add({
        restaurant_id: "raGIfwmgkRvA0a99VwzN",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "Cafe One",
        stars: 5,
        review_description: "Enthralling ambiance coupled with consistently"
        + " excellent coffee and delightful pastries. A haven"
        + " worth revisiting!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "gpBIHouQPi7KaKcN1HBk",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "Cafe Two",
        stars: 4,
        review_description: "A serene escape offering splendid coffee,"
        + " perfect for unwinding inside a peaceful environment.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "f0EMav5d0nKhCwS2ctUP",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "FastFood One",
        stars: 3,
        review_description: "Reasonable tacos, decent fries,"
        + " and friendly service, but the overall experience"
        + " fell short of remarkable.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "FJYehiJEPRQ3YZUvphox",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "FastFood Two",
        stars: 4,
        review_description: "A swift, satisfying meal featuring"
        + " a delicious burger and crispy fries—a friendly stop"
        + " for a quick bite!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "psa29DnAU1seNOLFjpEg",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "FancyRestaurant One",
        stars: 4,
        review_description: "An opulent dining affair delivering"
        + " delightful flavors and elegance amid a remarkable"
        + " setting. It was a distinguished culinary journey!",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    restaurantReviews.add({
        restaurant_id: "UynCiVyFhDTvwtqd5Zmf",
        user_id: "twFao4KcpsbLROHwBucXjj7RjXh2",
        restaurant_name: "FancyRestaurant Two",
        stars: 4,
        review_description: "Beautiful dishes accompanied by a"
        + " lavish atmosphere and commendable service.",
        date: firebase.firestore.FieldValue.serverTimestamp(),
    });
}