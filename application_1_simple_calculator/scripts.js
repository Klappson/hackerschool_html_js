function show_error(err_str){
    var err_box = document.getElementById("msg_box")
    err_box.innerText = err_str
    err_box.style.backgroundColor = "rgb(220,100,100)"
    err_box.style.visibility = "visible"
}
function hide_error(){
    document.getElementById("msg_box").style.visibility = "hidden"
}
function get_numbers(){
    var num_one = document.getElementById("num_one")
    var num_two = document.getElementById("num_two")

    var num_one_int = parseInt(num_one.value)
    var num_two_int = parseInt(num_two.value)

    if(isNaN(num_one_int) || isNaN(num_two_int)){
        show_error("Es können nur Zahlen verrechnet werden")
        return undefined
    }else{
        hide_error()
    }

    return [num_one_int, num_two_int]
}
function add(){
    console.log("Adding...")
    var erg_tag = document.getElementById("erg")
    var nums = get_numbers()

    if(nums == undefined){
        return
    }
    erg = nums[0]+nums[1]
    erg_tag.value = erg
}