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
    

    const pathJSON = join("backend/DB/usuarios.json")

    const datos = {
        mail: undefined, 
        nombre: undefined, 
        contraseña: undefined, 
    }

    function registrar(data) {

        const nuevoUsuario = Object.create(datos);

        nuevoUsuario.mail = data.mail; 
        nuevoUsuario.nombre = data.nombre; 
        nuevoUsuario.contraseña = data.contraseña;

        let usuariosActuales = []; 

        try {
            const datosJSON = readFileSync(pathJSON,  "utf8");
            usuariosActuales = JSON.parse(datosJSON);

            if (!Array.isArray(usuariosActuales)) {
                usuariosActuales = []
            }
        }
        catch (error) {
            console.log(error);
        }

        usuariosActuales.push(nuevoUsuario); 

        const info = JSON.stringify(usuariosActuales, null, 2); 
        writeFileSync(pathJSON, info); 

        console.log("nuevo usuario registrado", nuevoUsuario); 
    }

    onEvent('registrar', (data) => {
        registrar(data);
    });

