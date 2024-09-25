import { onEvent } from "soquetic";

let horario;

postData("horario", nombre, (nombres) => {
    let nombre = 'pepe'
}),
onEvent('horario', encontrarTodosLosNombres);

function encontrarTodosLosNombres(datos) {
    
    let todosLosNombres =  JSON.parse(fs.readFileSync('DB/nombres.json', 'utf-8'));
    todosLosNombres.push(datos)

}   


console.log('hoal soy pepe')
console.log(horario);