document.addEventListener("DOMContentLoaded", function() {
    // Fetch the content of backbar.html
    fetch("./text/backbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(backbarContent => {
            // Insert the backbar content into the container
            document.getElementById("returnbarPlaceholder").innerHTML = backbarContent;
        })
        .catch(error => {
            console.error("Error fetching sidebar content:", error);
        });
});


