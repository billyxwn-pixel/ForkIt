
function displayCardsDyanmically(collection){
    let cardTemplate = document.getElementById("restCardTemp");

    db.collection(collection).get()
    .then(allRest=> {

        allRest.forEach(doc => {
            var title = doc.data().name;
            var details = doc.data().recent_visit;
            var RestCode = doc.data().bgImage;
            var resttime = doc.data().hours.fri;
            var resthours = resttime.split(" ");
            var am = resthours[0] + resthours[1];
            var pm = resthours[2] + resthours[3];
            var restkeyword = doc.data().keywords;
            let newcard = cardTemplate.content.cloneNode(true);
           
            newcard.querySelector('.texttitle').innerHTML = title;
            newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
            newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
            newcard.querySelector('.card-img').src = RestCode;

            document.getElementById(collection + "-goes-here").appendChild(newcard)

        })
    })
}

displayCardsDyanmically("restaurant");