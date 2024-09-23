import fs from 'fs';
import { onEvent,sendEvent, startServer } from "soquetic";


onEvent()


let now = new Date();
let data = fs.readFileSync('DB/horarios.json', 'utf8')
let horario = "1"
sendEvent("horario", horario);


let json = JSON.parse(data);

let dia =  now.getDay();

let bloque = "bloque3"; 

if (now.getHours() >= 7 && now.getHours() <= 8 ||
 now.getHours() == 9 && now.getMinutes() <= 5) {
    //ahora.innerHTML = "bloque 1"
    bloque = "bloque1"
}

else if (now.getHours() >= 9 && now.getMinutes() > 5 && now.getHours() < 10 || now.getHours() == 10 && now.getMinutes() < 40) {
   // ahora.innerHTML = "bloque 2"
    bloque = "bloque2"
}

else if (now.getHours() == 10 && now.getMinutes() >= 40 || now.getHours() == 11 || now.getHours() == 12  && now.getMinutes() < 15) {
   // ahora.innerHTML = "bloque 3"
    bloque = "bloque3"
}

else if (now.getHours() == 13 && now.getMinutes() >= 10 || now.getHours() == 14 && now.getMinutes() < 30 ) {
  //  ahora.innerHTML = "bloque 4"
    bloque = "bloque4"
}

else if (now.getHours() == 15 && now.getMinutes() <= 59 || now.getHours() == 14 && now.getMinutes() > 30 ) {
  //  ahora.innerHTML = "bloque 5"
    bloque = "bloque5"


}

if (json.Daro[dia])
{
    if(json.Daro[dia][bloque]) {
        console.log(json.Daro[dia][bloque]);
    }

    else {
        console.log("No disponible");
    }
}
else {
    console.log("No disponible hoy");
}

if (json.Ivo[dia])
{
    if(json.Ivo[dia][bloque]) {
        console.log(json.Ivo[dia][bloque]);
    }

    else {
        console.log("No disponible");
    }
}
else {
    console.log("No disponible hoy");
}

if (json.Pau[dia])
{

    if(json.Pau[dia][bloque]) {
        console.log(json.Pau[dia][bloque]);
    }

    else {
        console.log("No disponible");
    }
}
else {
    console.log("No disponible hoy");
}

if (json.Lu[dia])
{
    if(json.Lu[dia][bloque]) {
        console.log(json.Lu[dia][bloque]);
    }

    else {
        console.log("No disponible");
    }
}
else {
    console.log("No disponible hoy");
}

startServer();