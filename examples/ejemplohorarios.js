let now = new Date();
let ahora = document.getElementById("now")

if (now.getHours() > 16 && now.getHours() < 18 && now.getMinutes() > 10 && now.getMinutes() < 30) {
    ahora.innerHTML = "bloque 5"
}

