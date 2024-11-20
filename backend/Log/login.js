import {
    writeFile,
    readFileSync,
    readFile,
    fstat,
    fdatasync,
    writeFileSync,
    } from "fs";
    import { join } from "path";
    import { randomUUID } from "crypto";
    import { onEvent, sendEvent, startServer } from "soquetic";
    


    const datos = {
        mail: "", 
        contraseña: "", 
    }

    export function login(data) {



        let usuariosActuales = []; 
let userExist = false
        try {
            const datosJSON = readFileSync("../backend/DB/usuarios.json",  "utf8");
            usuariosActuales = JSON.parse(datosJSON);

            usuariosActuales.forEach(element => {
                if (data.mail === element.mail &&
                    data.contraseña === element.contraseña) {
                    userExist = true
                }
                
            });
        }
        catch (error) {
            console.log(error);
        }

      

        console.log("Usuario logeado:", userExist); 
        return userExist
    }