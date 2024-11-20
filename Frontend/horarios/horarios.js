
let boton = document.getElementById("button")
let dario
let pau
let ivo
let lu

fetchData("horarios",(data)=>{
   lu = data.lu;
   dario = data.daro;
   ivo = data.ivo;
   pau = data.pau
   console.log(lu)

})



