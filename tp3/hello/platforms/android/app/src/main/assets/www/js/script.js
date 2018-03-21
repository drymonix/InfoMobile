document.addEventListener("deviceready", checkConnection, false);
document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("batterystatus", onBatteryStatus, false);
/*window.addEventListener("batterylow", onBatteryLow, false);
window.addEventListener("batterycritical", onBatteryCritical, false);*/

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Connexion inconnue';
    states[Connection.ETHERNET] = 'Connexion Ethernet';
    states[Connection.WIFI] = 'Connexion WiFi';
    states[Connection.CELL_2G] = 'Connexion cellulaire 2G';
    states[Connection.CELL_3G] = 'Connexion cellulaire 3G';
    states[Connection.CELL_4G] = 'Connexion cellulaire 4G';
    states[Connection.CELL] = 'Connexion cellulaire générique';
    states[Connection.NONE] = 'Aucune connexion';

    if (networkState !== Connection.NONE) {
        alert('Vous êtes connecté !');
        alert('Type de connexion : ' + states[networkState]);
    } else {
        alert('Erreur ! Pas de connexion !');
    }
}

function onDeviceReady() {
    var model = device.model;
    var OS = device.platform;
    var language = navigator.language;
    var version = device.version;
    var UUID = device.uuid;
    alert("Modele = " + model);
    alert("OS = " + OS);
    alert("langue = " + language);
    alert("version = " + version);
    alert("UUID = " + UUID);
    var myContact = navigator.contacts.create({ "displayName": "Test User" });
    alert("Contact = " + myContact);
}

function onBatteryStatus(status) {
    if (status.level <= 20) {
        onBatteryLow();
    }
    alert("Niveau de batterie : " + status.level + " est branché : " + status.isPlugged);
}

function menuBurger() {
    if ($("#buttonBlock").css("display") == "block") {
        $("#burger").html("&#9776;");
        $("#buttonBlock").css("display", "none");
        $("header").css("height", "100px");
    } else {
        $("#burger").html("X");
        $("#buttonBlock").css("display", "block");
        $("header").css("height", "200px");
    }
}