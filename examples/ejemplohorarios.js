let now = new Date();
let ahora = document.getElementById("now");
var fs = require('fs');
var data = fs.readFileSync('horarios.json', 'utf8');

if (
    (now.getHours() == 9 && now.getMinutes() == 6 && now.getSeconds() ==  1|| 
    now.getHours() == 10 && now.getMinutes() == 41 && now.getSeconds() == 1|| 
    now.getHours() == 12 && now.getMinutes() == 16 && now.getSeconds() == 1|| 
    now.getHours() == 14 && now.getMinutes() == 11 && now.getSeconds() == 1|| 
    now.getHours() == 14 && now.getMinutes() == 33 && now.getSeconds() == 1)
) {

    console.log(":)")
    window.location.href = "/examples/ejemplohorario.html"
} 

else if (
    (now.getHours() >= 7 && now.getHours() <= 8) || 
    (now.getHours() == 9 && now.getMinutes() <= 5)
) 
{
    ahora.innerHTML = "bloque 1";
} 

else if (
    (now.getHours() >= 9 && now.getMinutes() > 5 && now.getHours() < 10) || 
    (now.getHours() == 10 && now.getMinutes() < 40)
) 
{
    ahora.innerHTML = "bloque 2";
}

else if (
    (now.getHours() == 10 && now.getMinutes() >= 40) || 
    (now.getHours() == 11) || 
    (now.getHours() == 12 && now.getMinutes() <= 15)
) {
    ahora.innerHTML = "bloque 3";
} else if (
    (now.getHours() == 13 && now.getMinutes() >= 10) || 
    (now.getHours() == 14 && now.getMinutes() < 30)
) {
    ahora.innerHTML = "bloque 4";
} else if (
    (now.getHours() == 15 && now.getMinutes() <= 59) || 
    (now.getHours() == 14 && now.getMinutes() >= 30)
) {
    ahora.innerHTML = "bloque 5";
}

