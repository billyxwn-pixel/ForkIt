    //to pull the query from the local storage
    var queryid = localStorage.getItem("query");
    
    //code is for if there is no query whatsoever
    function displayCardsDyanmically1(collection){
        let cardTemplate = document.getElementById("restCardTemp");
    
        db.collection(collection)
        .get()
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
                var docID = doc.id;
                let newcard = cardTemplate.content.cloneNode(true);
               
                newcard.querySelector('.texttitle').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
                newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
                newcard.querySelector('.card-img').src = RestCode;
    
                document.getElementById(collection + "-goes-here").appendChild(newcard)
    
            })
        })
    }
    //code for if a query is sent in
    function displayCardsDyanmically2(collection){
    let cardTemplate = document.getElementById("restCardTemp");
    console.log(queryid)
    db.collection(collection)
    .orderBy(queryid)
    .get()
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
            var docID = doc.id;
            let newcard = cardTemplate.content.cloneNode(true);
           
            newcard.querySelector('.texttitle').innerHTML = title;
            newcard.querySelector('.card-text').innerHTML = restkeyword + " Attendance: " + details;
            newcard.querySelector('.timetext').innerHTML = am + " - " + pm;
            newcard.querySelector('.card-img').src = RestCode;
            newcard.querySelector('#hiddenbutton').href = "/restaurant.html?/" + docID;

            document.getElementById(collection + "-goes-here").appendChild(newcard)

        })
    })
}

    //driver program

    if (queryid == "Thai"){
    displayCardsDyanmically1("restaurant")}
    else {
    displayCardsDyanmically2("restaurant")};