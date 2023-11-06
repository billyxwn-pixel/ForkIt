
function displayCardsDyanmically(collection){
    let cardTemplate = document.getElementById("restCardTemp");

    db.collection(collection).get()
    .then(allRest=> {

        allRest.forEach(doc => {
            var title = doc.data().name;
            var details = doc.data().recent_visit;
            var RestCode = doc.data().bgImage;
            var resttime = doc.data().hours;
            var restkeyword = doc.data().keywords;
            let newcard = cardTemplate.content.cloneNode(true);

            newcard.querySelector('.texttitle').innerHTML = title;
            newcard.querySelector('.card-text').innerHTML = restkeyword + "/ Attendance: " + details;
            newcard.querySelector('.timetext').innerHTML = resttime;
            newcard.querySelector('.card-img').src = RestCode;

            document.getElementById(collection + "-goes-here").appendChild(newcard)

        })
    })
}

displayCardsDyanmically("restaurant");