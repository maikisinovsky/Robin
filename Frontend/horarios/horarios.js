const ivoPlaceholder = document.querySelector(".placeholderIvo")
const daroPlaceholder = document.querySelector(".placeholderDaro")
const PauPlaceholder = document.querySelector(".placeholderPau")
const LuPlaceholder = document.querySelector(".placeholderLu")

let daro 
let pau 
let ivo 
let lu 

fetchData("horarios",(data)=>{
   daro = data.daro;
   ivo = data.ivo;
   pau = data.pau;
   lu  = data.lu;
})

let aulaIvo = document.createElement("div")
aulaIvo.innerHTML = `${ivo}`
aulaIvo.classList.add("aulaIvo")

let aulaDaro = document.createElement("div")
aulaDaro.innerHTML = `${daro}`
aulaDaro.classList.add("aulaDaro")

let aulaPau = document.createElement("div")
aulaPau.innerHTML = `${pau}`
aulaPau.classList.add("aulaPau")

let aulaLu = document.createElement("div")
aulaLu.innerHTML = `${lu}`
aulaLu.classList.add("aulaLu")

ivoPlaceholder.appendChild(aulaIvo)
daroPlaceholder.appendChild(aulaDaro)
PauPlaceholder.appendChild(aulaPau)
LuPlaceholder.appendChild(aulaLu)








