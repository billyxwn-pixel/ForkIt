//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
// function loadSkeleton(){    // .load (is ajax function) is called to load navbarPlaceholder to nav.html file all the time.
//     console.log($('#navbarPlaceholder').load('./text/nav.html'));
//     console.log($('#footerPlaceholder').load('./text/footer.html'));
// }
// loadSkeleton();  //invoke the function (calling the function in javascript)

//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
// function loadSkeleton() {

//     firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {                   //if the pointer to "user" object is not null, then someone is logged in
//             // User is signed in.
//             // Do something for the user here.
//             console.log($('#searchbarPlaceholder').load('./text/searchbar.html'));
//             console.log($('#footerPlaceholder').load('./text/navbar_footer.html'));
//         } else {
//             // No user is signed in.
//             console.log($('#searchbarPlaceholder').load('./text/searchbar.html'));
//             console.log($('#footerPlaceholder').load('./text/navbar_footer.html'));
//         }
//     });
// }
// loadSkeleton(); //invoke the function

// Function to load and inject HTML content
// function loadHTMLContent(id, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             const element = document.getElementById(id);
//             element.innerHTML = data;
//         })
//         .catch(error => console.error('Error loading HTML content:', error));
// }

// Load the header and footer
//loadHTMLContent('searchbarPlaceholder', './text/searchbar.html');
//loadHTMLContent('footerPlaceholder', './text/navbar_footer.html');

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the search bar HTML
    fetch('./text/searchbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('searchbarPlaceholder').innerHTML = html;
        })
        .then(() => {
            // After loading the search bar, set up the event listener
            setupSearchEventListener();
        });
});

function setupSearchEventListener() {
    const searchInput = document.getElementById('searchvalue');

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var query = searchInput.value;
            var querys = query.substring(0,1).toUpperCase() + query.substring(1).toLowerCase();
            localStorage.setItem("query", querys);
            console.log(querys);
            window.location.href = './search.html?q=' + encodeURIComponent(querys);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the search bar HTML
    fetch('./text/navbar_footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footerPlaceholder').innerHTML = html;
        })
        .then(() => {
            // After loading the search bar, set up the event listener
            setupSearchEventListener0();
            setupSearchEventListener1();
        });
});

function setupSearchEventListener0() {
    const searchInput = document.getElementById('home1');

    searchInput.addEventListener('click', function (event) {
        const query = searchInput.value;
        window.location.href = './index.html?q=' + encodeURIComponent(query);

    });
}

function setupSearchEventListener1() {
    const searchInput = document.getElementById('searchshortcut');

    searchInput.addEventListener('click', function (event) {
        const query = searchInput.value;
        window.location.href = './search.html?q=' + encodeURIComponent(query);

    });
}



