// your code here
document.getElementById("button").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission

            // Get input values
            let name = document.getElementById("name").value.trim();
            let year = document.getElementById("year").value.trim();

            // Construct the URL with query parameters
            let baseUrl = "https://localhost:8080/";
			if(name && !year){
				baseUrl += `?name=${encodeURIComponent(name)}`;
			}
            else if (!name && year) {
                baseUrl += `?year=${encodeURIComponent(year)}`;
            }

            // Update the h3 text with the new URL
            document.getElementById("url").textContent = baseUrl;
        });