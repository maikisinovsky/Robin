const ivoPlaceholder = document.querySelector(".placeholderIvo")
const daroPlaceholder = document.querySelector(".placeholderDaro")
const PauPlaceholder = document.querySelector(".placeholderPau")
const LuPlaceholder = document.querySelector(".placeholderLu")

let daro = "" 
let pau = ""
let ivo = ""
let lu = ""

fetchData("horarios",(data)=>{
   sessionStorage.setItem("daro",data.data.daro.aula)
   sessionStorage.setItem("ivo",data.data.ivo.aula)
   sessionStorage.setItem("pau",data.data.pau.aula)
   sessionStorage.setItem("lu",data.data.lu.aula)

   
})
console.log(ivo)

let aulaIvo = document.createElement("div")
aulaIvo.innerHTML = `${sessionStorage.getItem("ivo")}`
aulaIvo.classList.add("aulaIvo")

let aulaDaro = document.createElement("div")
aulaDaro.innerHTML = `${sessionStorage.getItem("daro")}`
aulaDaro.classList.add("aulaDaro")

let aulaPau = document.createElement("div")
aulaPau.innerHTML = `${sessionStorage.getItem("pau")}`
aulaPau.classList.add("aulaPau")

let aulaLu = document.createElement("div")
aulaLu.innerHTML = `${sessionStorage.getItem("lu")}`
aulaLu.classList.add("aulaLu")

ivoPlaceholder.appendChild(aulaIvo)
daroPlaceholder.appendChild(aulaDaro)
PauPlaceholder.appendChild(aulaPau)
LuPlaceholder.appendChild(aulaLu)








