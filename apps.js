

// apply variables to all ID from HTML file

const key = document.getElementById("key")
const header = document.getElementById("header")
const eventkey = document.getElementById("eventkey")
const eventcode = document.getElementById("eventcode")
const eventwhich = document.getElementById("eventwhich")

// listening for a key down event

document.addEventListener("keydown", (e) => {
    header.textContent = e.keyCode
    eventcode.textContent = e
    
    console.log(e)
})