const loginform = document.querySelector("#loginForm")
loginform.addEventListener("submit", (e)=> {
    e.preventDefault()

    const Mail = document.querySelector("#Mail").value
    const Contraseña = document.querySelector("#Contraseña").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = Users.find(user => user.Mail === Mail && user.Contraseña === Contraseña)

    if(!validUser){ 
        return alert("Usuario y/o contraseña incorrectos")
    } else {
        alert("Bienvenido!")
        window.location.href = "/home/home.html"
    }
    
}) 