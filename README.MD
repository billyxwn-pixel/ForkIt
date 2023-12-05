
# ForkIt (BBY26)

## 1. Project description
ForkIt is a web application intended to give users a more streamlined and community-focused experience for restaurant searching compared to other similar applications on the market.

## 2. Contributors
* Calvin Lee - Project Manager - calvinnleeee@gmail.com // clee527@my.bcit.ca
* Bryan Le - Design Head - ble16@my.bcit.ca
* Alenn Dupaya - Programmer - gauttieralenndupaya@gmail.com
* Billy Wei - Programmer - billyxwn@gmail.com
	
## 3. Technologies and resources used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML5, CSS, JavaScript
* Bootstrap 5.0
* Firebase 8.0
* Google Material Icons
* COMP1800 Tech Tips

## 4. Installation / How to access
* The web application will be deployed through Node and the Firebase module. This can be accessed at the following URL:
https://comp1800-bby26-994ce.web.app
* The code can be accessed on Github, where users can clone the repository and run the application locally through Visual Studio Code's Live Server extension. 
* * Github for the project: https://github.com/calbunn/1800_202330_BBY26
* * Visual Studio Code: https://code.visualstudio.com
* * Code Live Server extension: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
* Once the app is running or accessed online, you are free to explore the available functions!

## 5. Known bugs and limitations
* - Bugs:
* None discovered yet.

* - Limitations:
* Currently hard-coded to show a restaurant is open now even if it isn't. Code needs to be adjusted to determine if the current time is within the current day's business hours for a restaurant and change the string accordingly.
* Keyword search requires exact word/space match, would like to make it more lax.

## 6. Features and improvements for the future
What we'd like to build in the future:
* Integrate Google Maps better, so the Open Maps button on a restaurant's page can link and provide directions right away without any more input from the user.
* A more fleshed-out profile function, so the user can upload pictures and put in more information about themselves.
* A way for users to specify they are a business owner, and let them put their business details into the database.
* A cleanup on the Firestore database to reduce redundancies and prepare for a larger-scale deployment.
* Sorting of search results based on distance from the user to each restaurant (distance calculation with latitude/longitude)
* URL scraping to find a restaurant's health safety rating / recent inspection results (cleanliness was an important factor for people from our surveys)
* Community review display at landing page shows just a few reviews, looks very plain. Needs more highlighting, improved aesthetics.
	
## 7. Project folder contents

```
 Top level of project folder: 
├── .DS_Store
├── .firebaserc
├── .gitignore			# Git ignore file
├── 404.html			# 404 page to load if there's a server error
├── dfa				# History of commits
├── firebase.json		# Required file for Node/Firebase deployment
├── firestore.indexes.json	# Required file for Node/Firebase deployment
├── firestore.rules		# Required file for Node/Firebase deployment
├── index.html			# Landing HTML file
├── login.html			# Login page
├── profile.html		# Page for users to edit their own information
├── restaurant.html		# Page displaying a restaurant's info and reviews
├── search.html			# Search page to find and browse restaurants
└── README.md

 Subfolders and their contents:
├── images			# stores images used for fake restaurant backgrounds, icons, logos
    /CAFE1.jpg
    /CAFE2.jpg
    /FF1.jpg
    /FF2.jpg
    /FR1.jpg
    /FR2.jpg
    /Restaurant_Logo_New.jpg
    /Restaurant_Stock.jpg
    /default_img.png
    /group_FILL0_wght400_GRAD0_opsz40.png
    /home_FILL0_wght400_GRAD0_opsz40.png
    /manage_accounts_FILL0_wght400_GRAD0_opsz40.png
    /menu_FILL0_wght400_GRAD0_opsz40.png
    /rand_restaurant_photo.jpg
    /search_FILL0_wght400_GRAD0_opsz40.png
├── scripts
    /authentication.js
    /backbar.js
    /firebaseAPI_BBY26.js	# Contains firebase database login credentials (expires end of 2023)
    /index.js
    /oldcode.js			# Contains code used to generate placeholder data used for testing
    /profile.js
    /restaurant.js
    /script.js
    /search.js
    /skeleton.js
├── styles
    /styleindex.css
    /stylelogin.css
    /styleprofile.css
    /stylerestaurant.css
    /stylesearch.css
└── text
    /backbar.html
    /navbar_footer.html		# Skeleton navigation bar to be loaded into all pages
    /searchbar.html		# Skeleton search bar to be loaded into most pages



```

