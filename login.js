const loginform = document.querySelector("loginFrom")
loginform.addEventListener(sumbit, (e)=> {
    e.preventDefault()
    const Mail = document.querySelector("#Mail").value
    const Contraseña = document.querySelector("#Contraseña").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = User.find(user => user.Mail === Mail && user.Contraseña === Contraseña)
    if(!validUser){ 
        return alert("Usuario y/o contraseña incorrectos")
    }
    alert("Bienvenido!")
    window.location.href = "home.html"
}) 