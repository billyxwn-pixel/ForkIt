// Event listener which loads the search bar at the top of the page
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

// Function that sets up an event listener for the search bar after it has been loaded
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

// Event listener which loads the navigation bar at the bottom of the screen
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the nav bar HTML
    fetch('./text/navbar_footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footerPlaceholder').innerHTML = html;
        })
        .then(() => {
            // After loading the search bar, set up the event listener
            setupSearchEventListener0();
            setupSearchEventListener1();
            load();
        });
});

// Functions that set up event listeners for the navigation bar
function setupSearchEventListener0() {
    const searchInput = document.getElementById('home1');

    searchInput.addEventListener('click', function (event) {
        const query = searchInput.value;
        window.location.href = './index.html';

    });
}
function setupSearchEventListener1() {
    const searchInput = document.getElementById('searchshortcut');

    searchInput.addEventListener('click', function (event) {
        const query = searchInput.value;
        window.location.href = './search.html';

    });
}

// Function to check the user's authentication state
function load() {
    firebase.auth().onAuthStateChanged(user => {
        const morePopup = document.getElementById('morePopup');
        const moreContent = document.getElementById('moreContent');
    
        // Event listener for the "More" button
        document.getElementById('more').addEventListener('click', () => {
            if (user) {
                // User is logged in, show logout
                moreContent.innerHTML = '<a><button onclick="logoutOnclick()" id="loggingOut">Logout</button></a>';
            } else {
                // User is not logged in, show login
                moreContent.innerHTML = '<a href="login.html"><button>Login</button></a>';
            }
            morePopup.style.display = 'block';
        });
    });
}

// Closes the review form if black background is clicked
window.onclick = function (event) {
    var clickOutPopup = document.getElementById("morePopup");
    if (event.target == clickOutPopup) {
        clickOutPopup.style.display = "none";
    }
}

// Log-out function
function logoutOnclick() {
    if (confirm("Are you sure you want to log out?")) {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert("Sign-out successful")
            localStorage.clear();
        }).catch((error) => {
            // An error happened.
        });
        location.replace("index.html");
    }
}

// Prevents access to profile page if user is not logged in.
function profileOnClick() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the profile.html page if user object exist in firebase (i.e. is logged-in)
            location.replace("profile.html");            
        } else {
            alert("Please login first before editing!");
            location.replace("login.html");
            // No user is signed in.
            // console.log("No user is signed in");
        }
    });
} 
