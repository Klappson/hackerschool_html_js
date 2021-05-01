// Show error zeigt die Übergebene Meldung an
function show_error(err_str){
    // Hier holen wir uns anhand der id die Fehlerbox
    var err_box = document.getElementById("msg_box")

    // Hier setzen wir die Nachricht der Box, die Farbe und machen sie sichtbar
    err_box.innerText = err_str
    err_box.style.backgroundColor = "rgb(220,100,100)"
    err_box.style.visibility = "visible"
}

// Mit dieser Methode können wir die Errorbox wieder verschwinden lassen
function hide_error(){
    document.getElementById("msg_box").style.visibility = "hidden"
}

// Da wir unabhängig von der Rechenoperation immer die Zahlen aus
// den Feldern laden und überprüfen müssen, bietet es sich an diesen
// Vorgang in eine extra Methode auszulagern
function get_numbers(){
    // Hier holen wir uns die Felder
    var num_one = document.getElementById("num_one")
    var num_two = document.getElementById("num_two")

    // Da die Werte als Strings aus den Feldern geladen werden, müssen
    // wir sie erst zu ints machen.
    // Dafür gibt es in JavaScript die "parseInt()"-Methode
    // Sie macht aus einem String eine Zahl. Sollte es nicht möglich
    // sein, aus dem String eine Zahl zu machen, gibt die Methode NaN (Not a Number) zurück
    var num_one_int = parseInt(num_one.value)
    var num_two_int = parseInt(num_two.value)

    // Wenn eine der Zahlen NaN ist, können wir nicht rechnen.
    // Wir brechen den Vorgang mit return ab und zeigen vorher eine Fehlernachricht
    if(isNaN(num_one_int) || isNaN(num_two_int)){
        show_error("Es können nur Zahlen verrechnet werden")
        return undefined
    }else{
        // Falls beide Zahlen erfolgreich gelesen werden können,
        // verstecken wir die Fehlerbox (falls eine da war)
        hide_error()
    }

    // Hier geben wir die Beiden Zahlen als ints in einer Liste zurück
    return [num_one_int, num_two_int]
}

// Zahlen laden, zusammenrechnen und im Ergebnisfeld anzeigen
function add(){
    // Holen der Zahlen und der Ergebnisbox
    var erg_tag = document.getElementById("erg")
    var nums = get_numbers()

    // Sollten wir keine Zahlen bekommen, brechen wir ab
    if(nums == undefined){
        return
    }

    // Beide Zahlen addieren...
    erg = nums[0]+nums[1]
    // und anzeigen
    erg_tag.value = erg
}

// Zahlen laden, zusammenrechnen und im Ergebnisfeld anzeigen
function sub(){
    // Holen der Zahlen und der Ergebnisbox
    var erg_tag = document.getElementById("erg")
    var nums = get_numbers()

    // Sollten wir keine Zahlen bekommen, brechen wir ab
    if(nums == undefined){
        return
    }

    // Beide Zahlen addieren...
    erg = nums[0]-nums[1]
    // und anzeigen
    erg_tag.value = erg
}

// Zahlen laden, zusammenrechnen und im Ergebnisfeld anzeigen
function mul(){
    // Holen der Zahlen und der Ergebnisbox
    var erg_tag = document.getElementById("erg")
    var nums = get_numbers()

    // Sollten wir keine Zahlen bekommen, brechen wir ab
    if(nums == undefined){
        return
    }

    // Beide Zahlen addieren...
    erg = nums[0]*nums[1]
    // und anzeigen
    erg_tag.value = erg
}

// Zahlen laden, zusammenrechnen und im Ergebnisfeld anzeigen
function div(){
    // Holen der Zahlen und der Ergebnisbox
    var erg_tag = document.getElementById("erg")
    var nums = get_numbers()

    // Sollten wir keine Zahlen bekommen, brechen wir ab
    if(nums == undefined){
        return
    }

    // Beide Zahlen addieren...
    erg = nums[0]/nums[1]
    // und anzeigen
    erg_tag.value = erg
}

function center_content(){
    
}