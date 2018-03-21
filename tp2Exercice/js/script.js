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