// Function to read the quote of the day from Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readQuote(day) {
    db.collection("quotes").doc(day)                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(dayDoc => {                                                               //arrow notation
           console.log("current document data: " + dayDoc.data());                          //.data() returns data object
           document.getElementById("quote-goes-here").innerHTML = dayDoc.data().quotes;      //using javascript to display the data on the right place
           
           //Here are other ways to access key-value data fields
           //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
           //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
		       //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;
      })
}


function getDayOfWeek() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 0) {
        // Sunday
        return readQuote("Sunday");
    } else if (dayOfWeek === 1) {
        // Monday
        return readQuote("Monday");
    } else if (dayOfWeek === 2) {
        // Tuesday
        return readQuote("Tuesday");
    } else if (dayOfWeek === 3) {
        // Wednesday
        return readQuote("Wednesday");
    } else if (dayOfWeek === 4) {
        // Thursday
        return readQuote("Thursday");
    } else if (dayOfWeek === 5) {
        // Friday
        return readQuote("Friday");
    } else if (dayOfWeek === 6) {
        // Saturday
        return readQuote("Saturday");
    }
}

const message = getDayOfWeek();
console.log(message);
