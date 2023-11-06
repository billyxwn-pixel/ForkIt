const db = firebase.firestore();

function writeRestaurants() {
    //define a variable for the collection you want to create in Firestore to populate data
    var RestaurantRef = db.collection("restaurant");

    RestaurantRef.add({
        code: "Restaurant_Stock",
        name: "Stock_Name", //fake data for restaurant?
        opening: 8.00,
        closing: 22.00,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    RestaurantRef.add({
        code: "Restaurant_Stock",
        name: "Stock_Name", //fake data for restaurant?
        opening: 10.00,
        closing: 21.00,
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
    });
    RestaurantRef.add({
        code: "Restaurant_Stock",
        name: "Stock_Name", //fake data for restaurant?
        opening: 11.00,
        closing: 23.00,
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("January 1, 2023"))
    });
}