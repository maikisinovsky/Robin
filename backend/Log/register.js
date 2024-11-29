import {
    writeFileSync,
    readFileSync,
} from "fs";
import { join } from "path";

const pathJSON = join("../backend/DB/usuarios.json");

const datos = {
    mail: "",
    nombre: "",
    contraseña: "",
    envios: [] // Asegura que todos los usuarios tengan esta propiedad inicializada
};

export function registrar(data) {
    console.log(data);

    // Crear el nuevo usuario con la plantilla base
    const nuevoUsuario = Object.create(datos);

    nuevoUsuario.mail = data.mail;
    nuevoUsuario.nombre = data.nombre;
    nuevoUsuario.contraseña = data.contraseña;
    nuevoUsuario.envios = []; // Inicializa `envios` como un arreglo vacío

    let usuariosActuales = [];

    try {
        // Leer usuarios existentes desde el archivo
        const datosJSON = readFileSync(pathJSON, "utf8");
        usuariosActuales = JSON.parse(datosJSON);

        if (!Array.isArray(usuariosActuales)) {
            usuariosActuales = [];
        }
    } catch (error) {
        console.log("Error leyendo el archivo de usuarios:", error);
    }

    // Agregar el nuevo usuario
    usuariosActuales.push(nuevoUsuario);

    try {
        // Guardar los usuarios actualizados en el archivo
        const info = JSON.stringify(usuariosActuales, null, 2);
        writeFileSync(pathJSON, info);
        console.log("Nuevo usuario registrado:", nuevoUsuario);
    } catch (error) {
        console.log("Error al guardar el archivo de usuarios:", error);
    }
}
