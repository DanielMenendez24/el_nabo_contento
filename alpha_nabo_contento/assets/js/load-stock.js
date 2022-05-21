// Carga del JSON en el DOM
document.querySelector('.store').addEventListener('onload', load_stock());

function load_stock() {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let data = JSON.parse(this.responseText);
            console.log(data);

            for (var a in data) {

                var b = data[a];

                for (var c in b) {

                    var d = c[b];

                    var inp = document.querySelector('#nameProd' + c);

                    (inp) ? (inp.value = d) : false;

                };

            };

        };

    };

    xhttp.open('GET', '/alpha_nabo_contento/assets/json/stock.json', true);

    xhttp.send();
};