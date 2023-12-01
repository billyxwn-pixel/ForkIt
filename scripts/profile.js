// Event listener for the back button, user goes to previous page (whether it was search or home)
document.getElementById("returnbarPlaceholder").addEventListener("click", function (event) {
    history.back();
});

var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userAddress = userDoc.data().address;
                    var userCity = userDoc.data().city;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userAddress != null) {
                        document.getElementById("addressInput").value = userAddress;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                })
        } else {
            alert("Please login first before editing!");
            // No user is signed in.
            // console.log("No user is signed in");
        }
    });
}

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}

// saveUserInfo() function will update the user input from the textbox.
// and will alert the user that they 
// It will alert the user that they have already saved their changes
function saveUserInfo() {

    // get user entered values
    const userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    const userAddress = document.getElementById('addressInput').value;     //get the value of the field with id="addressInput"
    const userCity = document.getElementById('cityInput').value;       //get the value of the field with id="cityInput"

    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userNamedb = userDoc.data().name;
                    var userAddressdb = userDoc.data().address;
                    var userCitydb = userDoc.data().city;

                    //if the data fields are not empty, then write them in to the form.
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
                })
        } else {
            location.replace("index.html");

        }
    });

    // disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}

//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
    }).catch((error) => {
        // An error happened.
    });
}

