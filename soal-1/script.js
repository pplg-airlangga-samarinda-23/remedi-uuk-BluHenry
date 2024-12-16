function ahaw(NumberNav){
    document.getElementById("Page1").classList.remove("active")
    document.getElementById("Page2").classList.remove("active")
    document.getElementById("Page3").classList.remove("active")





    if (NumberNav === 1) {
        document.getElementById("Page1").classList.add("active")
    } else if (NumberNav === 2 ) {
        document.getElementById("Page2").classList.add("active")
    } else if (NumberNav === 3 ) {
        document.getElementById("Page3").classList.add("active")
    }
}
