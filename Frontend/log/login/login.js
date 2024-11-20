const loginform = document.querySelector("#loginForm")
loginform.addEventListener("submit", (e)=> {
    e.preventDefault()

    const Mail = document.querySelector("#Mail").value
    const Contraseña = document.querySelector("#Contraseña").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    let validUser = false
  postData("login",{mail:Mail, contraseña:Contraseña},(data)=>{
    console.log(data)
    validUser = data
    if(!validUser){ 
        return alert("Usuario y/o contraseña incorrectos")
    } else {
        alert("Bienvenido!")
        window.location.href = "/Frontend/home/home.html"
    }
    })

   
    
}) 