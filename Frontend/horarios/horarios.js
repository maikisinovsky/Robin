
let boton = document.getElementById("button")
const placeholder = document.getElementById("tablaHorarios")
let dario
let pau 0 E
let ivo = "ejemplo"
let lu = "ejemplo"

fetchData("horarios",(data)=>{
   dario = data.daro;
   ivo = data.ivo;
   pau = data.pau

   console.log(pau)
   console.log(daro)
   console.log(ivo)

})


let aulaLu = document.createElement("div")
aulaLu.classList.add("ejemplo")
aulaLu.innerHTML = `ejemplo ${lu}`

placeholder.appendChild(aulaLu)




