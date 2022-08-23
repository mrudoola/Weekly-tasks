fetch('products.json')
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
            var mainContainer = document.getElementsByClassName("product_table");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'id: ' + data[i].id + ' '+ 'Name: '+data[i].name + ' '+ 'mrp: '+data[i].mrp +' '+'available stock: '+data[i].availableStock+' '+'measure: '+data[i].measure +' '+'category: '+data[i].category;
                mainContainer.appendChild(div);
            }
        }