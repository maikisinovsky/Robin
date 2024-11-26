import { onEvent, startServer,sendEvent } from "soquetic";

import { registrar } from "./Log/register.js";
import  fs  from "fs";
import { login } from "./Log/login.js";
import { index } from "./Log/index.js";
import {arduino} from "./arduino.js"

onEvent("registrar", (data) => {
    console.log(data)
   return registrar(data)
})
onEvent("login", (data) => {
    console.log(data)
   return login(data)
})

onEvent("horarios", (data) => {
    console.log(data)
   return index(data)
})

onEvent("sendArduino",(data)=>{
    console.log(data)
    return arduino(data)
})

onEvent("guardarData",(data)=>{
    const {user, destination, motivo} = data
    let usuarios = JSON.parse(fs.readFileSync("./DB/usuarios.json", "utf8"))
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].mail === user){
            usuarios[i].envios.push({
                destination: destination,
                user: usuarios[i].nombre,
                motivo: motivo
            })
            fs.writeFileSync("./DB/usuarios.json", JSON.stringify(usuarios, null, 2))
            return true
        }
    }
    
    return false
})


onEvent("guardados",(data)=>{
    const {user} = data
    let usuarios = JSON.parse(fs.readFileSync("./DB/usuarios.json", "utf8"))
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].mail === user){
           return usuarios[i].envios
        }
    }

    
})




export const sendToFront = (data)=>{
    sendEvent("dataFromArduino",data)
}

startServer()