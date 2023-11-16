//---------------------------------
// Your own functions here
//---------------------------------


function sayHello() {
    //do something
}
//sayHello();    //invoke function

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

function displayCardsDynamically(collection){
  let cardTemplate = document.getElementById("restCardTemps");

  db.collection(collection).get()
  .then(allRest=> {

      allRest.forEach(doc => {
        
        const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        let days = day.substring(0, 3);

          var title = doc.data().name;
          var details = doc.data().recent_visit;
          var RestCode = doc.data().bgImage;
          var resttime = doc.data().hours[days];
          var resthours = resttime.split(" ");
          var am = resthours[0] + resthours[1];
          var pm = resthours[2] + resthours[3];
          var restkeyword = doc.data().keywords;
          let newcard = cardTemplate.content.cloneNode(true);
         
          newcard.querySelector('.texttitle').innerHTML = title;
          newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
          newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
          newcard.querySelector('.card-img').src = RestCode;

          document.getElementById("content1").appendChild(newcard)

      })
  })
}

displayCardsDynamically("restaurant");

