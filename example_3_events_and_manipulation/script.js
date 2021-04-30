// Eine listen mit Events kann hier gefunden werden
// https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
document.addEventListener("DOMContentLoaded", setup_target)

function setup_target(){
    var target_box = document.getElementById("target_box")
    target_box.style.width = "500px"
    target_box.style.height = "500px"
    target_box.style.border = "solid"

    target_box.addEventListener("click", change_target_color)
}

function change_target_color(){
    var target_box = document.getElementById("target_box")
    target_box.style.backgroundColor = gen_random_color()
}

function gen_random_color(){
    var red = Math.floor(Math.random()*10000%255)
    var green = Math.floor(Math.random()*10000%255)
    var blue = Math.floor(Math.random()*10000%255)

    return "rgb("+red+","+green+","+blue+")"
}