import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("messi", ()=>{
    return "hola manola, chupame las bolas";
})