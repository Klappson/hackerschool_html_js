function greet_me(){
    var name = prompt("Wie heißt du?")
    var input_empty = name == ""

    if(input_empty){
        alert("Hallo Fremder")
    }else{
        alert("Hallo "+name)
    }
}