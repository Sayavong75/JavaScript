// ----------------------------------------------------------------------
// Fonction pour récupérer et afficher la dernière mesure
function displayLastMeasure() {

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `http://192.168.1.197:8080/last-measure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            var idMesure = jsonResult.id;
            var dateMesure = jsonResult.measureDate;
            var tempMesure = jsonResult.temperature;
            var pressionMesure = jsonResult.pressure;
            var humiditeMesure = jsonResult.humidity;

            var day = dateMesure.substring(8,10);
            var month = dateMesure.substring(5,7);
            var year = dateMesure.substring(0,4);

            // Construction du titre de la page 1
            var titleElt = document.createElement("div");
            var newText = document.createElement ("h2");
            titleElt.textContent = "Dernière mesure du " + day + "/" + month + "/" + year;
            newText.textContent = titleElt.textContent;

            // Construction des données recueillies
            var infoTemp = document.createElement("div");
            var infoHumidite = document.createElement("div");
            var infoPression = document.createElement("div");
            infoTemp.textContent = "Température : " + tempMesure + " °C";
            infoHumidite.textContent += "Humidité : " + humiditeMesure + " %hum";
            infoPression.textContent += "Pression : " + pressionMesure + " hPa";

            // Supprime tous les enfants d'un élément
            deleteChild("lastmeasurement");

            // Informations à restituer en affichage            
            var meteoElt = document.getElementById("lastmeasurement");
            meteoElt.appendChild(newText);
            meteoElt.appendChild(infoTemp);
            meteoElt.appendChild(infoHumidite);
            meteoElt.appendChild(infoPression);

        } else {
            var infoElt = document.createElement("div");
            infoElt.textContent = "Oups! Connexion non établie...";
            meteoElt.appendChild(infoElt)
        }
    }

    // Send request
    request.send();
}

// ----------------------------------------------------------------------
// Fonction pour récupérer et afficher la mesure max humidité
function displayTopMeasureHumidity() {

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `http://192.168.1.197:8080/top-measure/humidity`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            var idMesure = jsonResult.id;
            var dateMesure = jsonResult.measureDate;
            var tempMesure = jsonResult.temperature;
            var pressionMesure = jsonResult.pressure;
            var humiditeMesure = jsonResult.humidity;

            var day = dateMesure.substring(8,10);
            var month = dateMesure.substring(5,7);
            var year = dateMesure.substring(0,4);

            // Construction du titre de la page 1
            var titleElt = document.createElement("div");
            var newText = document.createElement ("h4");
            titleElt.textContent = "Top humidité le " + day + "/" + month + "/" + year;
            newText.textContent = titleElt.textContent;

            // Construction des données recueillies
            var infoTemp = document.createElement("div");
            var infoHumidite = document.createElement("div");
            var infoPression = document.createElement("div");
            infoTemp.textContent = "Température : " + tempMesure + " °C";
            infoHumidite.textContent = "Humidité : " + humiditeMesure + " %hum";
            infoPression.textContent = "Pression : " + pressionMesure + " hPa";

            // Supprime tous les enfants d'un élément
            deleteChild("topHumidite");

            // Informations à restituer en affichage            
            var meteoElt = document.getElementById("topHumidite");
            meteoElt.appendChild(newText);
            meteoElt.appendChild(infoTemp);
            meteoElt.appendChild(infoHumidite);
            meteoElt.appendChild(infoPression);

        } else {
            var infoElt = document.createElement("div");
            infoElt.textContent = "Oups! Connexion non établie...";
            meteoElt.appendChild(infoElt)
        }
    }

    // Send request
    request.send();
}

// ----------------------------------------------------------------------
// Fonction pour récupérer et afficher la mesure max température
function displayTopMeasureTempature() {

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `http://192.168.1.197:8080/top-measure/temperature`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            var idMesure = jsonResult.id;
            var dateMesure = jsonResult.measureDate;
            var tempMesure = jsonResult.temperature;
            var pressionMesure = jsonResult.pressure;
            var humiditeMesure = jsonResult.humidity;

            var day = dateMesure.substring(8,10);
            var month = dateMesure.substring(5,7);
            var year = dateMesure.substring(0,4);

            // Construction du titre de la page 1
            var titleElt = document.createElement("div");
            var newText = document.createElement ("h4");
            titleElt.textContent = "Top température le " + day + "/" + month + "/" + year;
            newText.textContent = titleElt.textContent;

            // Construction des données recueillies
            var infoTemp = document.createElement("div");
            var infoHumidite = document.createElement("div");
            var infoPression = document.createElement("div");
            infoTemp.textContent = "Température : " + tempMesure + " °C";
            infoHumidite.textContent = "Humidité : " + humiditeMesure + " %hum";
            infoPression.textContent = "Pression : " + pressionMesure + " hPa";

            // Supprime tous les enfants d'un élément
            deleteChild("topTemperature");

            // Informations à restituer en affichage            
            var meteoElt = document.getElementById("topTemperature");
            meteoElt.appendChild(newText);
            meteoElt.appendChild(infoTemp);
            meteoElt.appendChild(infoHumidite);
            meteoElt.appendChild(infoPression);

        } else {
            var infoElt = document.createElement("div");
            infoElt.textContent = "Oups! Connexion non établie...";
            meteoElt.appendChild(infoElt)
        }
    }

    // Send request
    request.send();
}

// ----------------------------------------------------------------------
// Fonction pour récupérer et afficher la mesure max pression
function displayTopMeasurePressure() {

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `http://192.168.1.197:8080/top-measure/pressure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            var idMesure = jsonResult.id;
            var dateMesure = jsonResult.measureDate;
            var tempMesure = jsonResult.temperature;
            var pressionMesure = jsonResult.pressure;
            var humiditeMesure = jsonResult.humidity;

            var day = dateMesure.substring(8,10);
            var month = dateMesure.substring(5,7);
            var year = dateMesure.substring(0,4);

            // Construction du titre de la page 1
            var titleElt = document.createElement("div");
            var newText = document.createElement ("h4");
            titleElt.textContent = "Top pression le " + day + "/" + month + "/" + year;
            newText.textContent = titleElt.textContent;

            // Construction des données recueillies
            var infoTemp = document.createElement("div");
            var infoHumidite = document.createElement("div");
            var infoPression = document.createElement("div");
            infoTemp.textContent = "Température : " + tempMesure + " °C";
            infoHumidite.textContent = "Humidité : " + humiditeMesure + " %hum";
            infoPression.textContent = "Pression : " + pressionMesure + " hPa";

            // Supprime tous les enfants d'un élément
            deleteChild("topPression");

            // Informations à restituer en affichage            
            var meteoElt = document.getElementById("topPression");
            meteoElt.appendChild(newText);
            meteoElt.appendChild(infoTemp);
            meteoElt.appendChild(infoHumidite);
            meteoElt.appendChild(infoPression);

        } else {
            var infoElt = document.createElement("div");
            infoElt.textContent = "Oups! Connexion non établie...";
            meteoElt.appendChild(infoElt)
        }
    }

    // Send request
    request.send();
}

// ----------------------------------------------------------------------
// Fonction pour récupérer et afficher les mesures entre 2 dates
function displayMeasurePeriod() {

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-01&endDate=2019-11-08`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)

            // Construction des données recueillies
            // var texteDate = "Date";
            // var texteTemp = "Temperature (°C)";
            // var texteHumidite = "Humidite (%hum)";
            // var textPression = "Pression (hPa)";

            // Supprime tous les enfants d'un élément
            deleteChild("screen_three");

            // Construction des entêtes de colonne
            myFunctionHeaderTable("screen_three");

            for (var i = 0; i < jsonResult.length; i++) {
                var dateMesure = jsonResult[i].measureDate;
                var tempMesure = jsonResult[i].temperature;
                var pressionMesure = jsonResult[i].pressure;
                var humiditeMesure = jsonResult[i].humidity;

                var day = dateMesure.substring(8,10);
                var month = dateMesure.substring(5,7);
                var year = dateMesure.substring(0,4);
                var timeM = dateMesure.substring(11,19);
    
                // Construction de la date au format FR
                dateMesure = day + "/" + month + "/" + year + " " + timeM;

                myFunctionMeasure("screen_three", dateMesure, tempMesure, pressionMesure, humiditeMesure);
            };

        } else {
            var infoElt = document.createElement("div");
            infoElt.textContent = "Oups! Connexion non établie...";
            meteoElt.appendChild(infoElt)
        }
    }

    // Send request
    request.send();
}

// ----------------------------------------------------------------------
// Pour masquer le bloc
function masquerBloc(id) {
    document.getElementById(id).style.display = "none";
    // document.getElementById('screen_two').style.visibility='hidden';
}
// Pour afficher le bloc
function afficherBloc(id) {
    document.getElementById(id).style.display = "block";
}

// Supprime tous les enfants d'un élément
function deleteChild(id) {
    var element = document.getElementById(id);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}

// ----------------------------------------------------------------------
// Affichage page 1
function pageOne() {
    masquerBloc("screen_two");
    masquerBloc("screen_three");
    afficherBloc("screen_one");
    displayLastMeasure();
}

// Affichage page 2
function pageTwo() {
    masquerBloc("screen_one");
    masquerBloc("screen_three");
    afficherBloc("screen_two");
    displayTopMeasureHumidity();
    displayTopMeasureTempature();
    displayTopMeasurePressure();
}

// Affichage page 3
function pageThree() {
    masquerBloc("screen_two");
    masquerBloc("screen_one");
    afficherBloc("screen_three");
    displayMeasurePeriod();
}

// Affichage page 4
function pageFour() {
    masquerBloc("screen_two");
    masquerBloc("screen_one");
    masquerBloc("screen_three");
}

function allPages() {
    deleteChild("screen_one");
    deleteChild("screen_two");
    deleteChild("screen_three");
}

// ----------------------------------------------------------------------
// Fonction pour créer un tableau de données
function myFunctionMeasure(id, dateM, temperatureM, humiditeM, PressionM) {

    var table = document.getElementById(id);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerText = dateM;
    cell2.innerText = temperatureM;
    cell3.innerText = humiditeM;
    cell4.innerText = PressionM;
  }

// Fonction pour créer les entêtes d'un tableau de données
function myFunctionHeaderTable(id) {

    var table = document.getElementById(id);
    var header = table.createTHead();
    var row = header.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // cell.innerHTML = "<b>This is a table header</b>";
    cell1.innerHTML = "<b>Date</b>";
    cell2.innerHTML = "<b>Temperature (°C)</b>";
    cell3.innerHTML = "<b>Humidite (%hum)</b>";
    cell4.innerHTML = "<b>Pression (hPa)</b>";

    cell1.style.backgroundColor = "lightgrey";
    cell2.style.backgroundColor = "lightgrey";
    cell3.style.backgroundColor = "lightgrey";
    cell4.style.backgroundColor = "lightgrey";
  }