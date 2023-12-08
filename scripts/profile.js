// Global variables for use in this js file
var currentUser;               // Stores the ID of the user who is logged in

// doAll function to run all required code on profile.html load
function doAll() {
    populateUserInfo();
}

// Event listener for the back button, user goes to previous page
document.getElementById("returnbarPlaceholder").addEventListener("click", function (event) {
    history.back();
});

// Function to display placeholder data for the profile fields if a user is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Go to the correct user document by referencing the user uid
            currentUser = db.collection("users").doc(user.uid)
            // Get the document for current user
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userAddress = userDoc.data().address;
                    var userCity = userDoc.data().city;

                    // If the data fields are not empty, then write them in to the form
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userAddress != null) {
                        document.getElementById("addressInput").value = userAddress;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                });
        } else {
            alert("Please login first before editing!");
            // No user is signed in.
            // console.log("No user is signed in");
        }
    });
}

// Function that enables user editing of the form fields
function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}

// Function that updates the user's document based on the input provided in the form fields.
// Alerts the user if the info was successfully updated, nothing was changed, or if there was
// an error. 
function saveUserInfo() {

    // Get user entered values
    const userName = document.getElementById('nameInput').value;
    const userAddress = document.getElementById('addressInput').value;
    const userCity = document.getElementById('cityInput').value;

    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Go to the correct user document by referencing the user uid
            currentUser = db.collection("users").doc(user.uid)
            currentUser.get()
                .then(userDoc => {
                    // Get the data fields of the user
                    var userNamedb = userDoc.data().name;
                    var userAddressdb = userDoc.data().address;
                    var userCitydb = userDoc.data().city;

                    // Only update the document if something has changed. Provides a meaningful alert to the user
                    // for each case. (success, no change, fail)
                    if (userNamedb === userName && userAddressdb === userAddress && userCitydb === userCity) {
                        alert("Nothing has been changed.");
                    } else {
                        // update user's document in Firestore
                        currentUser.update({
                            name: userName,
                            address: userAddress,
                            city: userCity
                        })
                            .then(() => {
                                alert("Profile information successfully updated!");
                            })
                            .catch((error) => {
                                alert.error("Error updating document: ", error);
                            });
                    }
                });
        } else {
            location.replace("index.html");
        }
    });
    // Disable editing once finished
    document.getElementById('personalInfoFields').disabled = true;
}

// Function used for the logout button, signs the user out
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
    }).catch((error) => {
        // An error happened.
    });
}
