    function showImage(incidentId) {
        
        let url = 'http://localhost:8080/classif-ai/crud/detection/domain/' + incidentId;

        fetch(url)
            .then((response) => {
                return response.json();
                })
            .then((data) => {
                let det = data;
                document.getElementById("snapshot").src = det.base64;

                let narrative = "<h5 class=\"card-title\">" + det.createdAt + "</h5><p class=\"card-text\">" + det.label + " ...</p><a href=\"#\" class=\"btn btn-primary\">More insights</a>";

                document.getElementById("snapshot-narrative").innerHTML = narrative;

                })
            .catch((error) => {
                console.log(error);
                });

        }



    async function apiPostRequest(url,options) {
        const response = await fetch(
            url,
            options
            );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
        const data = await response.json();
        return data;
        }
