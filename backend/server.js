import { onEvent, startServer,sendEvent } from "soquetic";

import { registrar } from "./Log/register.js";
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

export const sendToFront = (data)=>{
    sendEvent("dataFromArduino",data)
}

startServer()