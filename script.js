document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value.trim();
            let year = document.getElementById("year").value.trim();

            let baseUrl = "https://localhost:8080/";
			if(name && year){
				baseUrl += `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
			}
            else if(name && !year){
				baseUrl += `?name=${encodeURIComponent(name)}`;
			}
            else if (!name && year) {
                baseUrl += `?year=${encodeURIComponent(year)}`;
            }

            document.getElementById("url").textContent = baseUrl;
        });