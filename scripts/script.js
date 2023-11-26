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
          newcard.querySelector('.card-text').innerHTML = restkeyword + "<br>" + " Recent visits: " + details;
          newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
          newcard.querySelector('.card-img').src = "/images/"+ RestCode + ".jpg";
          newcard.querySelector(".card").addEventListener("click", function (event) {
            // utilizing local storage to pass restaurant id
            // localStorage.setItem("id", docID);
            // window.location.href = "./restaurant.html";

            // utilizing URL
            window.location.href = "./restaurant.html?id=" + docID;
        });
          document.getElementById("content1").appendChild(newcard)


      })
  })
}

displayCardsDynamically("restaurants");

