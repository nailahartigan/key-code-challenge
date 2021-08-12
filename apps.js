

// apply variables to all ID from HTML file

const key = document.getElementById("key")
const header = document.getElementById("header")
const eventkey = document.getElementById("eventKey")
const eventcode = document.getElementById("eventCode")
const eventwhich = document.getElementById("eventWhich")

// listening for a key down event

document.addEventListener("keydown", (e) => {
    header.textContent = e.keyCode
    eventkey.textContent =event.key
    eventcode.textContent = event.code
    eventwhich.textContent = event.which
})