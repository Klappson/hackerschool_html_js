// Variablen und Datentypen
// Strings
var test_string = 'Ein String ist eine Zeichenkette'

// Zahlen
// ints oder auch Integer sind ganze Zahlen
var test_int = 4
// Floats manchmal auch double genannt sind Kommazahlen
var test_float = 0.5
// Allgemeint können Zahlen miteinander verrechnet werden
var ergebnis = test_int+test_float

// In Listen oder auch Arrays genannt können Datentypen gelagert werden
var test_liste = [97,656,23,3456]
// Die Elemente in der Liste werden mit einem Index referenziert
test_liste[2] // Das gibt uns die 23 zurück

// Funktionen sind festgelegte Abläufe von Befehlen,
// denen in vielen Fällen Argumente übergeben werden können
// Die alert()-funktion zeigt Textpopups an
alert("Hello World!")

// Als Argument können auch variablen übergeben werden
alert(test_string)

// Funktionen können auch Variablen zurück geben
// prompt() zeigt ähnlich wie alert auch textpopups an. 
// Allerdings hat der Benutzer hier noch die Möglichkeit selber einen Text einzugeben.
// Der eingegebene Text kann in einer Variable gespeichert werden.
var eingabe = prompt("Wie heißt du?")
alert("Hallo "+eingabe)