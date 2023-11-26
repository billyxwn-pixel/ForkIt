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
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    //enter code here

    //a) get user entered values
    const userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    const userAddress = document.getElementById('addressInput').value;     //get the value of the field with id="addressInput"
    const userCity = document.getElementById('cityInput').value;       //get the value of the field with id="cityInput"

    //b) update user's document in Firestore
    currentUser.update({
        name: userName,
        address: userAddress,
        city: userCity
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });


    //c) disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}

