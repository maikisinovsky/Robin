let now = new Date();
let ahora = document.getElementById("now")
let data = fetchData("messi", (data)=>{
console.log(data)
})

if (now.getHours() >= 7 && now.getHours() <= 8 || now.getHours() == 9 && now.getMinutes() <= 5) {
    ahora.innerHTML = "bloque 1"
}

else if (now.getHours() >= 9 && now.getMinutes() > 5 && now.getHours() < 10 || now.getHours() == 10 && now.getMinutes() < 40) {
    ahora.innerHTML = "bloque 2"
}

else if (now.getHours() = 10 && now.getMinutes() >= 40 || now.getHours() == 11 || now.getHours() == 12 && now.getMinutes() < 15) {
    ahora.innerHTML = "bloque 3"
}

else if (now.getHours() == 13 && now.getMinutes() >= 10 || now.getHours() == 14 && now.getMinutes() < 30 ) {
    ahora.innerHTML = "bloque 4"
}

else if (now.getHours() == 15 && now.getMinutes() <= 59 || now.getHours() == 14 && now.getMinutes() > 30 ) {
    ahora.innerHTML = "bloque 5"
}

let json = JSON.parse(data);

console.log(json);
