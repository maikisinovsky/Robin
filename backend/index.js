import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"


onEvent("messi", ()=>{
    let horario = fs.readFileSync("./horarios.json").toString()

    return horario;
})

startServer()