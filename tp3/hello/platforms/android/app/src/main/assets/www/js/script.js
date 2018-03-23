document.addEventListener("deviceready", checkConnection, false);
document.addEventListener("deviceready", onDeviceReady, false);

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
    window.addEventListener("batterystatus", onBatteryStatus, false);
    document.getElementById("createContact").addEventListener("click", createContact);

    var model = device.model;
    var OS = device.platform;
    var language = navigator.language;
    var version = device.version;
    var UUID = device.uuid;
    alert("Modele = " + model + "\n" +
        "OS = " + OS + "\n" +
        "langue = " + language + "\n" +
        "version = " + version + "\n" +
        "UUID = " + UUID
    );
}

function onBatteryStatus(status) {
    if (status.level <= 20) {
        onBatteryLow();
    }
    alert("Niveau de batterie : " + status.level + " est branché : " + status.isPlugged);
}

function createContact() {
    var myContact = navigator.contacts.create({ "displayName": "Verlande Ryan", "phoneNumbers": "0671057319" });
    myContact.save(contactSuccess, contactError);

    function contactSuccess() {
        alert("Contact sauvegarde !");
    }

    function contactError(message) {
        alert('Erreur : ' + message);
    }


    var monMessage = "<table><tbody><tr><td id=\"nom\">" + myContact.displayName + "</td><td>" + myContact.phoneNumbers + "</td>";
    var contact = monMessage + "<hr></td></tr></tbody></table>";
    $(listContact).prepend(contact);

}