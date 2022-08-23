fetch('categories.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("jsonCategory");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'id: ' + data[i].id + ' '+ 'Name: '+data[i].categoryName;
                mainContainer.appendChild(div);
            }
        }