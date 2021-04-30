// Eine listen mit Events kann hier gefunden werden
// https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
// DOMContentLoaded passiert immer dann, wenn die Seite alles an HTML geladen hat
document.addEventListener("DOMContentLoaded", setup_target)

function setup_target(){
    // Hier holen wir uns die Box
    var target_box = document.getElementById("target_box")
    // Die größe der Box festlegen
    target_box.style.width = "500px"
    target_box.style.height = "500px"

    // Hiermit zeigen wir die ränder der Box
    target_box.style.border = "solid"

    // Das click-Event passiert immer wenn jemand das Event anklickt
    target_box.addEventListener("click", change_target_color)
}

// Setzt eine zufällige Farbe für die Target box
function change_target_color(){
    // Hier holen wir uns wieder die Box
    var target_box = document.getElementById("target_box")

    // Hier setzen wir die Hintergrundfarbe der Box
    target_box.style.backgroundColor = gen_random_color()
}

// Eine zufällige Farbe generieren
function gen_random_color(){
    // Hier passiert viel auf einmal
    // Math.random() = Gibt eine zufällige Zahl zwischen 0 und 1 zurück (0.4 0.344246 0.6323 etc.)
    // Damit wir eine Zahl über 0 bekommen, rechnen wir das zufällige ergebnis mal 10000 (2346.3476 346.2346 58.235 etc)
    // Math.floor() schneidet die Nachkommarstellen ab (4634 57245 568456 34 56)
    // Da die Farbwerte sich nur zwischen 0 und 255 befinden dürfen, benutzen wir hier noch modulo (235 73 157 146)
    var red = Math.floor(Math.random()*10000%255)
    var green = Math.floor(Math.random()*10000%255)
    var blue = Math.floor(Math.random()*10000%255)

    // Hier setzen wir die Farbe zusammen
    return "rgb("+red+","+green+","+blue+")"
}